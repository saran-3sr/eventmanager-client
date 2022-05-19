import React from 'react'
import BookingForm from '../component/Booking/BookingForm'
import Navbar from '../component/common/Navbar'

function BookingEvent() {
  return (
    <div className="BookingEvent">
        <Navbar/>
        <BookingForm/>
    </div>
  )
}

export default BookingEvent