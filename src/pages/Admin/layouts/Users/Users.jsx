/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {Drawer, Box} from "@mui/material";
import Modal from '../../components/Modal/Modal'
import { DataGrid } from '@mui/x-data-grid';
import { MdVisibility } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../../API/apiRequest';

import './Users.css';

const Users = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {userLists} = useSelector(state => state.user)

    const dispatch = useDispatch();

    useEffect(() => {
        getUsers(dispatch)
    }, [dispatch])

    const columns = [
        // { field: 'id', headerName: 'ID', width: 90 },        
        {
            field: 'fullname',
            headerName: 'Full Name',
            width: 150,
            editable: true,
            renderCell: (params)=>{
                return (
                    <p>{params.row.fullname}</p>
                )
            }
        },        
        // {
        //     field: 'profile',
        //     headerName: 'Profile',                        
        //     width: 150,
        //     renderCell: (params)=>{
        //         return(
        //             <>
        //                 {
        //                     params.row.
        //                 }
        //             </>
        //         )
        //     }
        // },
        {
            field: 'status',
            headerName: 'Account Status',                        
            width: 150,
            renderCell: (params)=>{
                return(
                    <button>Verify</button>
                )
            }
        },
        {
            field: 'update',
            headerName: 'Update',                        
            width: 150,
            renderCell: (params)=>{
                return(
                  <button className="edit">Update</button>
                )
            }
        },
        {
            field: 'delete',
            headerName: 'Delete',                        
            width: 150,
            renderCell: (params)=>{
                return(
                  <button className="del">Delete</button>
                )
            }
        },
        {
            field: 'view',
            headerName: 'View',                        
            width: 100,
            renderCell: (params)=>{
                return(
                  <MdVisibility className="view" fontSize={"1.2rem"} />
                )
            }
        },
    ];

    // const rows = [
    //     { id: 1, title: 'Snow', img: 'Jon', age: 35, instock: false },
    //     { id: 2, title: 'Lannister', img: 'Cersei', age: 42, instock: true },
    //     { id: 3, title: 'Lannister', img: 'Jaime', age: 45, instock: true },
    //     { id: 4, title: 'Stark', img: 'Arya', age: 16, instock: false },
    //     { id: 5, title: 'Targaryen', img: 'Daenerys', age: null, instock: true },
    //     { id: 6, title: 'Melisandre', img: null, age: 150, instock: false },
    //     { id: 7, title: 'Clifford', img: 'Ferrara', age: 44, instock: true },
    //     { id: 8, title: 'Frances', img: 'Rossini', age: 36, instock: false },
    //     { id: 9, title: 'Roxie', img: 'Harvey', age: 65, instock: true },
    // ];

    const handleModalOpen = () =>{
        setIsOpen(true);
    }


  return (
    <div className="user">
        <div className="user-wrapper">
            <div className="new-user">
                <span onClick={handleModalOpen}>New User</span>
                <Drawer anchor={"right"} open={isOpen} onClose={() => setIsOpen(false)} variant="temporary">
                    <Modal setIsOpen={setIsOpen} />                    
                </Drawer>

            </div>
            <div className="user-table">
                <Box sx={{width: '100%' }}>
                    <DataGrid
                        rows={userLists}
                        columns={columns}
                        getRowId={row => row._id}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                    />
                </Box>
            </div>
        </div>
    </div>
  )
}

export default Users