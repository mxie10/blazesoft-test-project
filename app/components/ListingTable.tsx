'use client';

import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableHeader } from '@/public/static/bookTable';
import bookList from '@/public/static/bookList';
import { FaTrashAlt } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from '@/app/hooks/useReduxHooks';
import { v4 as uuidv4 } from 'uuid';

const ListingTable = () => {

    const listings = useAppSelector((state) => state.listings.data)

    console.log('listingArray:', listings);

    // header of the table
    const Header = () => {
        return (
            <TableHead>
                <TableRow className=''>
                    {
                        tableHeader.map((header, index) => {
                            return (
                                <TableCell
                                    align={index === 0 ? 'left' : 'right'}
                                    className='font-bold text-md'
                                >
                                    {header.title}
                                </TableCell>
                            )
                        })
                    }
                </TableRow>
            </TableHead>
        )
    }

    // body of the table
    const Body = () => {
        return (
            <TableBody>
                {
                    bookList.map((row,index) => {
                        return (
                            <TableRow
                                key={row.id}
                                className={`
                                    ${index % 2 === 0 ?'bg-neutral-200' : 'bg-white'}
                                `}
                            >
                                <TableCell 
                                    component="th" 
                                    scope="row"
                                    className='text-blue-700 cursor-pointer hover:underline'
                                >
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">${row.price}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">
                                    <FaTrashAlt color='red'/>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        )
    }

    return (
        <>
            <TableContainer
                component={Paper}
                className='px-10 py-5 font-sans'
            >
                <Table>
                    <Header />
                    <Body />
                </Table>
            </TableContainer>
        </>
    )
}

export default ListingTable;
