'use client';

import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from '@/app/hooks/useReduxHooks';
import { v4 as uuidv4 } from 'uuid';
import { tableHeader } from '@/public/static/bookTableHeader';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"
import useAddBookModal from '../hooks/useAddBookModal';

const Listings = () => {

  const listings = useAppSelector((state) => state.listings.data);
  const addBookModal = useAddBookModal(); 

  const openAddBookModal = () => {
    console.log('in openAddBookModal?');
    addBookModal.onOpen();
  }

  // table header
  const Header = () => {
    return (
      <TableHeader>
        <TableRow>
          {
            tableHeader && tableHeader.map((element, index) => {
              return (
                <TableHead
                  key={element.title}
                  className={`${index === 0 ? 'w-96' : index === 3 ? 'w-24' : ''} text-md font-bold`}
                >
                  {element.title}
                </TableHead>
            )})
          }
        </TableRow>
      </TableHeader>
    )
  }

  // table body
  const Body = () => {
    return (
      <TableBody>
        {
          listings && listings.map((listing) => {
            return (
              <TableRow 
                key={listing.id}>
                <TableCell 
                  className="font-medium cursor-pointer hover:underline text-blue-600"
                >
                  {listing.name}
                </TableCell>
                <TableCell>${listing.price}</TableCell>
                <TableCell>{listing.category}</TableCell>
                <TableCell className="relative">
                  <FaTrashAlt 
                    className='absolute right-6 bottom-5 cursor-pointer'
                    size={20}
                    color='red'
                  />
                </TableCell>
              </TableRow>
          )})
        }
      </TableBody>
    )
  }

  return (
    <>
      <div className='relative'>
        <Button 
          className='absolute right-0 bottom-2 bg-sky-700 text-white hover:bg-sky-500'
          variant="outline"
          onClick={openAddBookModal}
        >
          + Add book
        </Button>
      </div>
      <Table className=''>
        <Header />
        <Body/>
      </Table>
    </>
  )
}

export default Listings;
