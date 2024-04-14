import { create } from 'zustand';
import { Book } from '../types/book';

interface AddBookModalProps {
  isOpen:boolean;
  onOpen: () => void;
  onClose: () => void;
  data: Book;
  setData: (data:Book) => void;
}

const useAddBookModal = create<AddBookModalProps>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen: false}),
    data:{
      id: '',
      name: '',
      price: 0,
      category:''
    },
    setData: (data) => set({data:data})
}))

export default useAddBookModal;