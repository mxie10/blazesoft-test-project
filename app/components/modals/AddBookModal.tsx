import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Book } from '@/app/types/book';
import { addListing } from '@/app/redux/state/Listings/listingSlice';
import { useAppDispatch } from '@/app/hooks/useReduxHooks';
import useAddBookModal from '@/app/hooks/useAddBookModal';

const fields = [
  {
    name: 'name',
    value: 'Name:'
  },
  {
    name: 'price',
    value: 'Price:'
  },
  {
    name: 'category',
    value: 'Category:'
  },
  {
    name: 'description',
    value: 'Description:'
  },
]

const AddBookModal = () => {

  const { isOpen, onOpen, onClose, data, setData } = useAddBookModal();
  const dispatch = useAppDispatch();

  const handleInputValueOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const handleOnSubmit = () => {
    dispatch(addListing(data));
    onClose();
  }

  return (
    <Dialog
      modal
      defaultOpen={isOpen}
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add book</DialogTitle>
        </DialogHeader>
        {
          fields && fields.map((field) => {
            return (
              <div key={field.name} className="flex flex-col gap-1.5">
                <Label htmlFor={field.name}>{field.value}</Label>
                <Input
                  id={field.name} 
                  name={field.name} 
                  className='w-full'
                  onChange = {(e) => handleInputValueOnChange(e)}
                />
              </div>
            )
          })
        }
        <DialogFooter>
          <Button 
            type="submit"
            onClick={handleOnSubmit}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddBookModal;
