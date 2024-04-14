import React from 'react';
import { useAppDispatch } from '@/app/hooks/useRedux';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { fields } from '@/public/static/modalFields';
import { updateListing } from '@/app/redux/state/Listings/listingSlice';
import Modal from './Modal';
import useBookDetailsModal from '@/app/hooks/useBookDetailsModal';

const BookDetailsModal = () => {

  const { isOpen, onClose, data, setData } = useBookDetailsModal();
  const dispatch = useAppDispatch();

  const handleInputValueOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const handleAction = () => {
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
              <Input
                id={field.name}
                name={field.name}
                className='w-full'
                onChange={(e) => handleInputValueOnChange(e)}
                value={data[field.name]}
              />
            </div>
          )
        })}
    </div>
  )

  return (
    <Modal
      title = 'Book details'
      body = {body}
      defaultOpen = {isOpen}
      isOpen = {isOpen}
      onOpenChange = {onClose}
      actionLabel='Update'
      handleAction = {handleAction}
    />
  )
}

export default BookDetailsModal;
