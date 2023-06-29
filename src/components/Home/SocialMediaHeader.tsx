import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const navLinks = [
  { href: '/sobre-nos', label: 'Sobre Nós' },
  { href: '/fale-conosco', label: 'Fale Conosco' },
  { href: '/agenda', label: 'Agenda' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/yourFacebookPage', Icon: FaFacebook },
  { href: 'https://www.twitter.com/yourTwitterAccount', Icon: FaTwitter },
  { href: 'https://www.instagram.com/yourInstagramAccount', Icon: FaInstagram },
];

function SocialMediaHeader() {
  return (
    <div className='border-b'>
      <div className='layout my-2 flex justify-between '>
        <nav>
          <ul className='flex gap-4 text-xs uppercase '>
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className='hover:border-primary-orange hover:border-b-2'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex gap-4'>
          {socialLinks.map(({ href, Icon }) => (
            <Link href={href} key={href} target='_blank' rel='noreferrer'>
              <Icon size={20} color='grey' />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialMediaHeader;
