import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/images/logoprefeitura.png';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import useWindowSize from '@/hooks/useWindowSize';

const EXTERNAL_LINKS = [
  {
    label: 'Acesso à informação',
    href: 'https://acessoainformacao.fortaleza.ce.gov.br/sistema/site/index.html?ReturnUrl=%2fsistema%2f',
  },
  {
    label: 'Transparência',
    href: 'https://transparencia.fortaleza.ce.gov.br/',
  },
  {
    label: 'Serviços',
    href: 'https://catalogodeservicos.fortaleza.ce.gov.br/',
  },
  {
    label: 'Legislação',
    href: 'https://sapl.fortaleza.ce.leg.br/',
  },
];

function TopLinks() {
  return (
    <>
      {EXTERNAL_LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className='mx-1 whitespace-nowrap text-center text-xs font-bold text-gray-500 hover:text-gray-500'
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-10 transform bg-primary-yellow ${
        isOpen ? '' : '-translate-x-full'
      } transition-all duration-300`}
    >
      <div className='flex h-full flex-col justify-center'>
        <button
          onClick={onClose}
          aria-label='Close menu'
          className='mr-4 mt-4 self-end text-white hover:text-gray-200 focus:outline-none'
        >
          <FiX size={24} />
        </button>
        <button className='flex flex-col items-center justify-center gap-6'>
          <TopLinks />
        </button>
      </div>
    </div>
  );
}

function Topbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const windowSize = useWindowSize();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className='top-0 z-50 w-full border-b bg-gray-100 p-1'>
        <div className='layout flex items-center justify-between'>
          <div className='w-32'>
            <Link href='https://www.fortaleza.ce.gov.br/' className='block'>
              <Image
                src={Logo}
                alt='Prefeitura de Fortaleza'
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className='flex gap-4'>
            <button
              onClick={toggleMobileMenu}
              aria-label='Toggle menu'
              className='block  hover:text-gray-200 focus:outline md:hidden'
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            {windowSize >= 768 && (
              <button className='flex justify-between gap-2 '>
                <TopLinks />
              </button>
            )}
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu isOpen={true} onClose={closeMobileMenu} />
      )}
    </>
  );
}

export default Topbar;
