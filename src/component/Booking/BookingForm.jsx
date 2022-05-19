import React from 'react'
import { Box } from '@mui/material'
import { TextField } from '@mui/material'
import Stack from '@mui/material/Stack';
import './../../css/Booking/BookingForm.css'
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers';
export default function BookingForm() {
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

                <TextField
                required
                id="Address"
                label="Address"
                placeholder='Name'
                />
                <div className="dateTime">
                    <input type="date" />
                </div>
            </div>

        </Box>
    </div>
  )
}
