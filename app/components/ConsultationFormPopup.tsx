"use client";
import React from 'react';
import ConsultationForm from "@/app/components/ConsultationForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";

interface ConsultationFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ConsultationFormPopup: React.FC<ConsultationFormPopupProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-[90vw] md:max-w-[60vw] lg:max-w-[50vw] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-[4vw] md:text-[2vw] lg:text-[1.5vw] font-bold text-center">
            Please Fill Out This Form
          </DialogTitle>
        </DialogHeader>
        <div className="p-[2vh]">
          <ConsultationForm onSuccess={onSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationFormPopup;
