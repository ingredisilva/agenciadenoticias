import { FC } from 'react';

type ButtonBoxProps = {
  icon: FC;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const ButtonBox: FC<ButtonBoxProps> = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`flex flex-col items-center justify-start p-4 text-center text-gray-600 
      transition-colors
      duration-300 hover:bg-gray-200 
       ${isActive ? 'border-b-2 border-primary-orange ' : ''}`}
      onClick={onClick}
    >
      <Icon />
      <span className='text-sm font-bold text-gray-700'>{label}</span>
    </button>
  );
};
