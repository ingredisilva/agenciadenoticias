export type SubmenuLink = {
  label: string;
  href: string;
};

type HeaderLink = {
  label: string;
  legenda: string;
  href: string;
  submenu: SubmenuLink[];
};

export const headerLinks: HeaderLink[] = [
  {
    label: 'Portal da Prefeitura',
    legenda: 'Página inicial',
    href: '/',
    submenu: [],
  },
  {
    label: 'A Agefis',
    legenda: 'Conheça mais',
    href: 'sobre',
    submenu: [],
  },

  {
    label: 'Nossa Revista',
    legenda: 'Conheça mais',
    href: 'revista',
    submenu: [],
  },
];
