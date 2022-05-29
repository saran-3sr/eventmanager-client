import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { TextField } from '@mui/material'
import './../../css/Booking/BookingForm.css'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers';
export default function BookingForm() {
    const [event, setEvent] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [mobile, setMobile] = useState("")
    const [bookedDate, setBookedDate] = useState("")
    const [alternateMobile, setAlternateMobile] = useState("")
    const [confirm,setConfirm] = useState(false)
    const handleChangeEvent=e=>{
        setEvent(e.target.value)
    }
    const handleChangeFirst=e=>{
        setFirstName(e.target.value)
    }
    const handleChangeLast=e=>{
        setLastName(e.target.value)
    }
    const handleChangeAddress=e=>{
        setAddress(e.target.value)
    }
    const handleChangeMobile=e=>{
        setMobile(e.target.value)
    }
    const handleChangeBookedDate=e=>{
        setBookedDate(e.target.value)
    }
    const handleChangeAlternateMobile=e=>{
        setAlternateMobile(e.target.value)
    }

    const handleBook=async (e)=>{
        e.preventDefault()
        const response=await fetch('http://localhost:5000/api/booking',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(
            {
                firstName:firstName,
                lastName:lastName,
                address:address,
                mobile:mobile,
                bookedDate:bookedDate,
                alternateMobile:alternateMobile||"",
                eventType:event
            }
          )
        })
        const book= await response.json()
        console.log(book.status)
        if(book.status)
        {
            setConfirm(true)
            console.log("in")
        }
      }

      const navigate=useNavigate();
  return (
    <div className="BookingForm">
    {!confirm &&
    
        <Box
        component="form"
        autoComplete='off'
        noValidate
        sx={{
            width:'80%',
            maxWidth:'500px'
        }}
        >
            <div className='BookingBox'>
                <div className="bookingname bookingFlex">
                    <TextField
                    required
                    id="firstName"
                    label="First Name"
                    placeholder='firstName'
                    onChange={handleChangeFirst}
                    />
                    <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    placeholder='lastName'
                    onChange={handleChangeLast}
                    />
                </div>

                <div className="bookingmobile bookingFlex">
                    <TextField
                    required
                    id="Mobile"
                    label="Mobile"
                    placeholder='Mobile'
                    onChange={handleChangeMobile}
                    />
                    <TextField
                    id="alternative"
                    label="Alternative No"
                    placeholder='Alternative No'
                    onChange={handleChangeAlternateMobile}
                    />
                </div>
                <div className='bookingFlex'>
                    <TextField
                    required
                    id="Address"
                    label="Address"
                    placeholder='Address'
                    fullWidth
                    multiline
                    onChange={handleChangeAddress}
                    />
                </div>
                <div className="bookingFlex">
                <FormControl fullWidth>
                        <InputLabel id="event-select">Type of Event</InputLabel>
                        <Select
                        labelId="event-select"
                        id="event-select"
                        value={event}
                        label="Type of event"
                        onChange={e=>handleChangeEvent(e)}
                        >
                            
                        <MenuItem value={1}>Birthday Party</MenuItem>
                        <MenuItem value={2}>Corporate Events</MenuItem>
                        <MenuItem value={3}>Social Gathering</MenuItem>
                        <MenuItem value={4}>Wedding</MenuItem>

                        </Select>
                </FormControl>
                </div>
                <div className="dateTime bookingFlex">
                    
                    <TextField
                            id="date"
                            label="Event Date"
                            type="date"
                            sx={{ width: 220 }}
                            onChange={handleChangeBookedDate}
                            InputLabelProps={{
                            shrink: true,
                            }}/>
                </div>
            </div>
                <div className="bookingBotton bookingFlex">
                <Button variant="contained" color="success" onClick={e=>handleBook(e)}>Book Event</Button>
                </div>               
        </Box>
        
    }
    
    <div className="bookingModal">
        
    {confirm && 
        <div>
            <p>Your Booking has been recorded. Our executive will call you with 24 hrs to proceed further. Thank You!</p>
            <Button variant="contained" color="success" onClick={ ()=>navigate('../home')}>Return To Home</Button>
        </div>
    }
    </div>
    </div>
  )
}
