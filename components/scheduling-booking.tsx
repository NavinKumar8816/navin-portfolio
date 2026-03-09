'use client'

import { useToast } from '@/hooks/use-toast'
import { motion } from 'framer-motion'
import { Calendar, Clock, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'

export function SchedulingBooking() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [isBoking, setIsBooking] = useState(false)
  const { toast } = useToast()

  // Generate available time slots (9 AM to 5 PM, 30-min intervals)
  const timeSlots = Array.from({ length: 16 }, (_, i) => {
    const hours = Math.floor(i / 2) + 9
    const minutes = (i % 2) * 30
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
  })

  // Generate available dates (next 14 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = []
    const currentDate = new Date()
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(currentDate)
      date.setDate(currentDate.getDate() + i)
      
      // Exclude weekends (0 = Sunday, 6 = Saturday)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date)
      }
    }
    
    return dates
  }

  const availableDates = getAvailableDates()

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !clientName || !clientEmail) {
      toast({
        description: 'Please fill in all fields',
        variant: 'destructive',
      })
      return
    }

    setIsBooking(true)

    try {
      // Format the booking details
      const bookingDateTime = new Date(selectedDate)
      const [hours, minutes] = selectedTime.split(':').map(Number)
      bookingDateTime.setHours(hours, minutes)

      // Prepare booking data
      const bookingData = {
        name: clientName,
        email: clientEmail,
        dateTime: bookingDateTime.toISOString(),
        timeSlot: selectedTime,
        date: selectedDate.toLocaleDateString(),
      }

      // Log for now - in production, send to your backend
      console.log('Meeting booked:', bookingData)

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      toast({
        description: `✅ Meeting scheduled for ${selectedDate.toLocaleDateString()} at ${selectedTime}. Confirmation sent to ${clientEmail}`,
      })

      // Reset form
      setSelectedDate(null)
      setSelectedTime(null)
      setClientName('')
      setClientEmail('')
      setIsOpen(false)
    } catch (error) {
      toast({
        description: 'Failed to book meeting. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsBooking(false)
    }
  }

  return (
    <>
      {/* Booking Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent text-background font-bold rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all border border-primary/50"
      >
        <Calendar className="w-5 h-5" />
        <span>Schedule Meeting</span>
      </motion.button>

      {/* Booking Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-slate-950 to-slate-900 border border-white/10">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className="text-2xl font-bold gradient-text">
              Schedule a Meeting
            </DialogTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* Client Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm">1</span>
                Your Information
              </h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary outline-none transition-colors text-foreground placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary outline-none transition-colors text-foreground placeholder-gray-500"
                />
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm">2</span>
                Select Date
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                {availableDates.map((date) => (
                  <motion.button
                    key={date.toISOString()}
                    onClick={() => setSelectedDate(date)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg font-medium transition-all text-sm ${
                      selectedDate?.toDateString() === date.toDateString()
                        ? 'bg-primary text-background'
                        : 'bg-white/5 border border-white/10 text-gray-300 hover:border-primary'
                    }`}
                  >
                    <div className="text-xs opacity-75">
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="text-sm">
                      {date.getDate()}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm">3</span>
                  Select Time
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg font-medium transition-all text-sm flex items-center justify-center gap-1 ${
                        selectedTime === time
                          ? 'bg-primary text-background'
                          : 'bg-white/5 border border-white/10 text-gray-300 hover:border-primary'
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      {time}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Summary */}
            {selectedDate && selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg"
              >
                <p className="text-sm text-gray-300 mb-2">
                  <span className="font-semibold text-foreground">Booking Summary:</span>
                </p>
                <p className="text-foreground">
                  📅 {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-foreground">
                  🕐 {selectedTime}
                </p>
              </motion.div>
            )}

            {/* Google Meet Link */}
            {selectedDate && selectedTime && (
              <motion.a
                href="https://calendar.app.google/jvPNkNqdgM67A8TTA"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="block p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/50 rounded-lg text-center font-semibold text-blue-300 hover:bg-blue-500/30 transition-all"
              >
                📹 Join Google Meet
              </motion.a>
            )}

            {/* Close Button */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="w-full"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
