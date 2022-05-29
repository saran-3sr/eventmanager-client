import React, { useEffect } from 'react'
import BookingOpen from '../component/adminConsole/bookingOpen'
function AdminConsole() {

useEffect(()=>{
   FetchOpenBook()
},[])

const FetchOpenBook=async()=>{
    const response=await fetch('http://localhost:5000/api/adminBook',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const openBookDetails=await response.json()
    console.log(openBookDetails)
}
  return (
    <div className="AdminConsole">
        <div className="ordersOpen">
            < BookingOpen />
        </div>
        <div className="orderClosed">
            Hello Orders closed
        </div>
    </div>
  )
}

export default AdminConsole