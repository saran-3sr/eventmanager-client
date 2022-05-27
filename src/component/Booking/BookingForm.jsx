import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { TextField } from '@mui/material'
import './../../css/Booking/BookingForm.css'
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
                userName:req.body.userName,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                address:req.body.address,
                mobile:req.body.mobile,
                bookedDate:req.body.bookedDate,
                alternateMobile:req.body.alternateMobile||"",
                eventType:req.body.eventType
            }
          )
        })
        const book= await response.json()
        
      }
  return (
    <div className="BookingForm">
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
                <Button variant="contained" color="success">Book Event</Button>
                </div>               
        </Box>
        
    </div>
  )
}
