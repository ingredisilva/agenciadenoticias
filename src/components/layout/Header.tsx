import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import useWindowSize from '@/hooks/useWindowSize';

import Modal from '@/components/globals/Modal';
import { headerLinks } from '@/components/Home/headerLinks';
import SocialMediaHeader from '@/components/Home/SocialMediaHeader';
import UnstyledLink from '@/components/links/UnstyledLink';

type HeaderLinkProps = {
  label: string;
  icon?: React.ReactNode;
  href: string;
  opensModal?: boolean;
};

function HeaderLink({
  label,
  icon,
  href,
  opensModal = false,
}: HeaderLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;
  const windowSize = useWindowSize();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const linkClasses = clsx(
    'flex',
    'justify-center',
    'items-center',
    'gap-4',
    'text-sm',
    'font-large',
    'text-primary-orange',
    'hover:text-gray-900',
    'xs:hidden',
    'md:block',
    'lg:block',
    isActive ? 'text-white' : ''
  );

  const linkContent = (
    <span className='flex w-full justify-center text-center font-bold '>
      <p className='text-center'>{label}</p>
    </span>
  );

  const linkElement = (
    <Link
      className={linkClasses}
      href={href}
      onClick={
        opensModal
          ? (event: React.MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault();
              handleButtonClick();
            }
          : undefined
      }
    >
      <div className='flex w-full flex-wrap items-center justify-center gap-2 p-2'>
        <span>{icon}</span>
        <span>
          <p
            className={`text-xs text-gray-500 ${
              isActive ? 'bg- text-white' : ''
            } font-bold uppercase text-gray-500`}
          >
            {label}
          </p>
        </span>
      </div>
    </Link>
  );

  return (
    <div
      className={clsx(
        'xs:flex-col xs:justify-center group relative h-20 items-center md:flex',
        {
          'bg-primary-yellow hover:bg-primary-darkorange': isActive,
          'hover:bg-slate-100': !isActive,
        }
      )}
    >
      {linkElement}
      {isModalOpen && (
        <Modal
          title='Feature Not Implemented'
          message='Em breve este serviço será disponibilizado.'
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const windowSize = useWindowSize();
  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className='border-primary-orange border-t-8 bg-white'>
      <SocialMediaHeader />
      <div className='layout flex flex-wrap items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <div className='bg-primary-orange flex w-64 flex-col items-center justify-center p-4'>
            <p className='text-xs text-gray-800'>AGÊNCIA DE NOTÍCIAS</p>
            <p className='text-xs text-gray-800'>DA PREFEITURA DE FORTALEZA</p>
          </div>
        </UnstyledLink>
        <nav className='xs:hidden flex items-center sm:hidden md:block lg:block'>
          <div className='mx-auto flex w-full items-center justify-end'>
            {headerLinks.map((link) => (
              <HeaderLink key={link.label} {...link} />
            ))}
          </div>
        </nav>
        <div className='xs:visible flex gap-4 md:hidden lg:hidden'>
          <button
            onClick={toggleMobileMenu}
            aria-label='Toggle menu'
            className='block rounded-md border bg-yellow-500 p-1 text-white hover:text-gray-200 focus:outline md:hidden'
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && windowSize <= 768 && (
        <div className='bg-primary-yellow absolute z-50 flex h-64 w-full flex-col items-center justify-center'>
          {headerLinks.map((link) => (
            <HeaderLink key={link.label} {...link} />
          ))}
        </div>
      )}
    </header>
  );
}
