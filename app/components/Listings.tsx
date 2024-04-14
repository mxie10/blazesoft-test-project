'use client';

import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from '@/app/hooks/useRedux';
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
import useBookDetailsModal from '../hooks/useBookDetailsModal';
import { Book } from '../types/book';

const Listings = () => {

  const listings = useAppSelector((state) => state.listings.data);
  const addBook = useAddBookModal(); 
  const bookDetails = useBookDetailsModal();

  const openAddBookModal = () => {
    addBook.onOpen();
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

    const handleBookDetails = (listing:Book) => {
      bookDetails.setData({
        id: listing.id,
        name: listing.name,
        price: listing.price,
        category:listing.category,
        description:listing.description,
      })
      bookDetails.onOpen();
    }

    return (
      <TableBody>
        {
          listings && listings.map((listing) => {
            return (
              <TableRow 
                key={listing.id}>
                <TableCell 
                  className="font-medium cursor-pointer hover:underline text-blue-600"
                  onClick={() => handleBookDetails(listing)}
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
      <Table>
        <Header />
        <Body/>
      </Table>
    </>
  )
}

export default Listings;
