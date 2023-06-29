import React, { FC, ReactNode } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

interface ModalProps {
  title?: string;
  message: string;
  onClose?: () => void;
  onClick?: () => void;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ message, onClose, children }) => {
  return (
    <div className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
      <div className='flex flex-col items-center justify-center  rounded-2xl bg-white p-6 dark:bg-gray-800'>
        <div className='relative w-full'>
          <button
            className='absolute right-0 top-0 rounded py-2 font-bold uppercase focus:outline-none'
            onClick={onClose}
          >
            <AiFillCloseCircle />
          </button>
        </div>
        <div className='items mt-10 flex flex-col justify-center px-4'>
          <p className='mb-3'>{message}</p>
          <div className='flex flex-col gap-4'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
