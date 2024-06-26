/*
* Add bool modal
*/

import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addListing } from '@/app/redux/state/Listings/listingSlice';
import { useAppDispatch } from '@/app/hooks/useRedux';
import { v4 as uuidv4 } from 'uuid';
import { fields } from '@/public/static/modalFields';
import type { EventType } from '@/app/types/event';
import useAddBookModal from '@/app/hooks/useAddBookModal';
import Modal from './Modal';

const AddBookModal = () => {

  const { isOpen, onClose, data, setData, showError, setShowError, setHideError } = useAddBookModal();
  const dispatch = useAppDispatch();

  const handleInputValueOnChange = (e: EventType) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim()
    })
    if(data.name.length){
      setHideError();
    }
  }

  /*
  * id is not useful here and will not apear on page, 
  * but each book is supposed to have an id, here generated by using uuid. 
  */
  const handleAction = () => {
    if (!data.name.length) {
      setShowError();
      return;
    }
    setHideError();
    const id = uuidv4();
    setData({
      ...data,
      id: id
    })
    dispatch(addListing(data));
    onClose();
  }

  const body = (
    <div className='flex flex-col gap-5'>
      {
        fields && fields.map((field) => {
          return (
            <div
              key={field.name}
              className="flex flex-col gap-1.5"
            >
              <Label htmlFor={field.name}>{field.value}</Label>
              {
                field.name !== 'description' ?
                  <Input
                    id={field.name}
                    name={field.name}
                    className='w-full'
                    onChange={(e) => handleInputValueOnChange(e)}
                  /> :
                  <Textarea
                    className='w-full'
                    id={field.name}
                    name={field.name}
                    onChange={(e) => handleInputValueOnChange(e)}
                  />
              }
            </div>
          )
        })}
      {
        showError ? 
        <div className='text-center text-red-600'>
            Book name is required.
        </div> : null
      }
    </div>
  )

  return (
    <Modal
      title='Add book'
      body={body}
      defaultOpen={isOpen}
      isOpen={isOpen}
      onOpenChange={onClose}
      actionLabel='Submit'
      handleAction={handleAction}
    />
  )
}

export default AddBookModal;
