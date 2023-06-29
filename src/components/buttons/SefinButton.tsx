import React from 'react';

type ButtonProps = {
  isGreen?: boolean;
  children: React.ReactNode;
  isActive?: boolean;
  isDarkBg?: boolean;
  isFullWidth?: boolean;
  isSmall?: boolean; // New prop for small button
  transparent?: boolean;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
};

const SefinButton: React.FC<ButtonProps> = ({
  isGreen,
  children,
  isActive,
  isDarkBg,
  isFullWidth,
  isSmall,
  transparent,
  onClick,
  isDisabled,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center h-9 px-4 rounded-2xl font-semibold text-sm focus:outline-none transition-colors duration-300 ' +
    (isSmall ? 'w-28' : 'w-44');
  const activeClasses = isActive
    ? 'bg-orange-500 text-white hover:bg-orange-600'
    : 'bg-gray-300 text-gray-800';
  const darkBgClasses = isDarkBg ? 'text-white bg-gray-700' : '';
  const fullWidthClasses = isFullWidth ? 'w-full bg-gray-700' : '';
  const transparentClasses = transparent
    ? 'bg-transparent border-2 border-gray-700 hover:border-primary-green'
    : '';
  const greenClasses = isGreen
    ? 'bg-primary-orange text-gray-700 hover:bg-primary-green'
    : '';
  const disabledClasses = isDisabled
    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
    : '';

  return (
    <button
      className={`${baseClasses} ${activeClasses} ${darkBgClasses} ${fullWidthClasses} ${transparentClasses} ${greenClasses} ${disabledClasses}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default SefinButton;
