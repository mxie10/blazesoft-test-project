import { create } from 'zustand';
import { Book } from '@/app/types/book';

interface AddBookModalProps {
  isOpen:boolean;
  onOpen: () => void;
  onClose: () => void;
  data: Book;
  setData: (data:Book) => void;
  showError:boolean;
  setShowError: () => void
  setHideError: () => void;
}

const useAddBookModal = create<AddBookModalProps>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({
      isOpen: false, 
      showError:false,
      data: { id: '', name: '', price: 0, category: '', description: '' }
    }),
    data:{
      id: '',
      name: '',
      price: 0,
      category:'',
      description:'',
    },
    setData: (data) => set({data:data}),
    showError:false,
    setShowError: () => set({showError:true}),
    setHideError: () => set({showError:false})
}))

export default useAddBookModal;