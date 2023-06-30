import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ImportantLinks } from '@/components/Footer/FooterContent';

import LogoPrefeitura from '/public/images/prefeitura-pb.png';

function Footer() {
  return (
    <footer className='shadow-top bg-primary-orange absolute w-full overflow-hidden text-gray-800 shadow-lg lg:block'>
      <div className='layout xs:p-2 relative flex flex-wrap gap-10   md:pt-10'>
        <div className='xs:justify-center flex flex-col gap-2'>
          <h3 className='text-lg'>ENDEREÇO E CONTATOS</h3>
          <p className='font-semibold'>
            Rua Francisco José de Alburquerque Pereira, 1020
          </p>
          <p className='font-semibold'>Cajazeiras, Fortaleza - CE</p>
          <p className='font-semibold'>CEP: 60.864-520</p>
          <p className='font-semibold'>Telefone: (85) 3487-8532 </p>
          <p className='font-semibold'>
            Para denúncias, instale nosso aplicativo ou ligue para:
          </p>
          <p className='mb-2 font-bold'> Central: 156</p>
          <Image
            src={LogoPrefeitura}
            aria-label='Logo da Prefeitura de Fortaleza'
            alt='Prefeitura de Fortaleza'
            className='grayscale filter'
          />
        </div>
        <div className='flex flex-col gap-2 '>
          {' '}
          <h4>LINKS IMPORTANTES</h4>
          {ImportantLinks.map((linksFooter, index) => {
            return (
              <>
                <Link
                  target='blank'
                  key={index}
                  href={linksFooter.href}
                  className='font-semibold hover:underline'
                >
                  <p>{linksFooter.name}</p>
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <div className='bg-primary-darkorange bottom-0 h-4 w-full'></div>
    </footer>
  );
}

export default Footer;
