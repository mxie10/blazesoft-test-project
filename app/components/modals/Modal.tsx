import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ModalProps {
  defaultOpen?: boolean;
  isOpen?:boolean;
  onOpenChange?: () => void;
  title?:string;
  body?: React.ReactNode;
  actionLabel?: string;
  handleAction?: () => void;
}

/*
* Modal container for all modals
* Actual body content is passed here as props
*/
const Modal:React.FC<ModalProps> = (props) => {

  const {defaultOpen,isOpen,onOpenChange,title,body,actionLabel,handleAction} = props;

  return (
    <Dialog
      modal
      defaultOpen={defaultOpen}
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {body}
        <DialogFooter>
          <Button 
            type="submit"
            onClick={handleAction}
          >
            {actionLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal;
