import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { TextField } from '@mui/material'
import './../../css/Booking/BookingForm.css'
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers';
export default function BookingForm() {
    const [event, setEvent] = useState("")
    const handleChange=e=>{
        setEvent(e.target.value)
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
                    />
                    <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    placeholder='lastName'
                    />
                </div>

                <div className="bookingmobile bookingFlex">
                    <TextField
                    required
                    id="Mobile"
                    label="Mobile"
                    placeholder='Mobile'
                    />
                    <TextField
                    id="alternative"
                    label="Alternative No"
                    placeholder='Alternative No'
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
                        onChange={e=>handleChange(e)}
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
