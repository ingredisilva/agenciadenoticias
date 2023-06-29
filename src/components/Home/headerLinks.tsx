import { ReactNode } from 'react';
import { AiOutlinePlayCircle, AiOutlineSound } from 'react-icons/ai';
import { BsChatSquareHeart, BsFillHouseAddFill } from 'react-icons/Bs';
import { GiMegaphone } from 'react-icons/gi';
import { IoMdCamera } from 'react-icons/Io';
import { RxFileText } from 'react-icons/rx';

export type HeaderLink = {
  id: string;
  label: string;
  icon: string | ReactNode;
  href: string;
};

export const headerLinks: HeaderLink[] = [
  {
    id: 'inicio',
    label: 'Inicio',
    icon: <BsFillHouseAddFill />,
    href: '/',
  },
  {
    id: 'banco_de_imagens',
    label: 'Banco de Imagens',
    href: '/bancodeimagens',
    icon: <IoMdCamera />,
  },
  {
    id: 'videos',
    label: 'Vídeos',
    href: '/videos',
    icon: <AiOutlinePlayCircle />,
  },
  {
    id: 'audios',
    label: 'Audios',
    href: '/audios',
    icon: <AiOutlineSound />,
  },

  {
    id: 'campanhas',
    label: 'Campanhas',
    href: '/campanhas',
    icon: <GiMegaphone />,
  },
  {
    id: 'midias_sociais',
    label: 'Mídias Sociais',
    href: '/midiassociais',
    icon: <BsChatSquareHeart />,
  },
  {
    id: 'artigos',
    label: 'Artigos',
    href: '/artigos',
    icon: <RxFileText />,
  },
];
