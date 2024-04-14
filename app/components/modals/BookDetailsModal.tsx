import React from 'react';
import { useAppDispatch } from '@/app/hooks/useRedux';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { fields } from '@/public/static/modalFields';
import { updateListing } from '@/app/redux/state/Listings/listingSlice';
import type { EventType } from '@/app/types/event';
import Modal from './Modal';
import useBookDetailsModal from '@/app/hooks/useBookDetailsModal';
import { Textarea } from '@/components/ui/textarea';

const BookDetailsModal = () => {

  const { isOpen, onClose, data, setData, showError, setShowError, setHideError } = useBookDetailsModal();
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

  const handleAction = () => {
    if(!data.name.length){
      setShowError();
      return;
    }
    setHideError();
    dispatch(updateListing(data));
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
                    value={data[field.name]}
                  /> :
                  <Textarea
                    className='w-full'
                    id={field.name}
                    name={field.name}
                    onChange={(e) => handleInputValueOnChange(e)}
                    value={data[field.name]}
                  />
              }
            </div>
          )
        })}
      {
        showError ?
          <div
            className='text-center text-red-600'>
            Book name cannot be empty
          </div> : null
      }
    </div>
  )

  return (
    <Modal
      title='Book details'
      body={body}
      defaultOpen={isOpen}
      isOpen={isOpen}
      onOpenChange={onClose}
      actionLabel='Update'
      handleAction={handleAction}
    />
  )
}

export default BookDetailsModal;
