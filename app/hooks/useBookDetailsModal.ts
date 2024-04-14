import { create } from 'zustand';
import { Book } from '../types/book';

export interface BookDetailsModalProps {
  isOpen:boolean;
  onOpen: () => void;
  onClose: () => void;
  data: Book;
  setData: (data:Book) => void;
}

const useBookDetailsModal = create<BookDetailsModalProps>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen: false}),
    data:{
      id: '',
      name: '',
      price: 0,
      category:'',
      description:''
    } as Book,
    setData: (data) => set({data:data})
}))

export default useBookDetailsModal;