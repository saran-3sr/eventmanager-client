import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import BookingOpen from '../component/adminConsole/bookingOpen'
import Navbar from '../component/common/Navbar'
import '../css/AdminConsole/adminConsole.css'
function AdminConsole() {

useEffect(()=>{
   FetchOpenBook()
},[])
const column=[
{field:'firstName',headerName:"First Name",type:"string", width:100},
{field:'lastName',headerName:"Last Name", width:100},
{field:'address',headerName:"Address", width:100},
{field:'mobile',headerName:"Mobile", width:100},
{field:'eventDesc',headerName:"Event Description", width:600},
]

const [openBookDetails, setOpenBookDetails] = useState(null)
const FetchOpenBook=async()=>{
    const response=await fetch('http://localhost:5000/api/adminBook',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const openBookDetails=await response.json()
    console.log(openBookDetails)
    setOpenBookDetails(openBookDetails)
}
  return (
    <div className="AdminConsole">
        <Navbar/>
        <div className="adminOrderView">
            <div className="ordersOpen" style={{ height: 400, width: '90%' }}>
                {openBookDetails &&
                    <DataGrid rows={openBookDetails} columns={column} pageSize={5}
                    getRowId={row=>row._id}
                    rowsPerPageOptions={[5]}
                    checkboxSelection />
                }
            </div>
        </div>
        <div className="orderClosed">
            Hello Orders closed
        </div>
    </div>
  )
}

export default AdminConsole