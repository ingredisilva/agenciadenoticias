export type Categories = {
  id: number;
  name: string;
};

export const filterCategories: Categories[] = [
  {
    id: 1,
    name: 'Saúde',
  },
  {
    id: 2,
    name: 'Educação',
  },
  {
    id: 3,
    name: 'Ação Social',
  },
  {
    id: 4,
    name: 'Cultura',
  },
  {
    id: 5,
    name: 'Cidade',
  },
  {
    id: 6,
    name: 'Mobilidade',
  },
  {
    id: 7,
    name: 'Meio Ambiente',
  },
  {
    id: 8,
    name: 'Juventude',
  },
  {
    id: 9,
    name: 'Esporte',
  },
  {
    id: 10,
    name: 'Economia',
  },
  {
    id: 11,
    name: 'Segurança',
  },
  {
    id: 12,
    name: 'Justiça',
  },
  {
    id: 13,
    name: 'Infrestrutura',
  },
  {
    id: 14,
    name: 'Turismo',
  },
  {
    id: 15,
    name: 'Lazer',
  },
  {
    id: 16,
    name: 'Desenvolvimento',
  },
  {
    id: 17,
    name: 'Ciência e Tecnologia',
  },
  {
    id: 18,
    name: 'Mulher',
  },
];

export type NewsItem = {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  categoryId: number;
};

export const newsList: NewsItem[] = [
  {
    id: 1,
    title: 'Saúde em destaque',
    summary:
      'A saúde pública está recebendo investimentos em infraestrutura...',
    imageUrl: 'https://source.unsplash.com/random/health',
    date: '2023-06-01',
    categoryId: 1,
  },
  {
    id: 2,
    title: 'Educação para o futuro',
    summary:
      'Novos projetos educacionais estão sendo desenvolvidos para preparar nossos jovens para o futuro...',
    imageUrl: 'https://source.unsplash.com/random/education',
    date: '2023-06-02',
    categoryId: 2,
  },
  {
    id: 3,
    title: 'Ação Social na Comunidade',
    summary:
      'Várias atividades sociais estão sendo organizadas para promover a inclusão e a solidariedade...',
    imageUrl: 'https://source.unsplash.com/random/community',
    date: '2023-06-03',
    categoryId: 3,
  },
  {
    id: 4,
    title: 'Festival de Cultura',
    summary:
      'Um grande festival de cultura está sendo planejado, com apresentações de música, dança, teatro e muito mais...',
    imageUrl: 'https://source.unsplash.com/random/culture',
    date: '2023-06-04',
    categoryId: 4,
  },
  {
    id: 5,
    title: 'Melhorias na Cidade',
    summary:
      'Novas construções e renovações estão transformando a paisagem da cidade...',
    imageUrl: 'https://source.unsplash.com/random/city',
    date: '2023-06-05',
    categoryId: 5,
  },
  {
    id: 6,
    title: 'Mobilidade Urbana em Foco',
    summary:
      'Novas políticas de mobilidade urbana estão sendo implementadas para melhorar o trânsito...',
    imageUrl: 'https://source.unsplash.com/random/traffic',
    date: '2023-06-06',
    categoryId: 6,
  },
  {
    id: 7,
    title: 'Protegendo o Meio Ambiente',
    summary:
      'Iniciativas de conservação ambiental estão sendo intensificadas para proteger nossa natureza...',
    imageUrl: 'https://source.unsplash.com/random/nature',
    date: '2023-06-07',
    categoryId: 7,
  },
  {
    id: 8,
    title: 'Juventude e o Futuro',
    summary:
      'Programas de capacitação para a juventude estão sendo lançados para garantir um futuro brilhante...',
    imageUrl: 'https://source.unsplash.com/random/youth',
    date: '2023-06-08',
    categoryId: 8,
  },
  {
    id: 9,
    title: 'Promovendo o Esporte',
    summary:
      'Eventos esportivos estão sendo organizados para promover a saúde e a unidade...',
    imageUrl: 'https://source.unsplash.com/random/sport',
    date: '2023-06-09',
    categoryId: 9,
  },
  {
    id: 10,
    title: 'Impulsionando a Economia',
    summary:
      'Medidas estão sendo tomadas para estimular a economia e apoiar as empresas locais...',
    imageUrl: 'https://source.unsplash.com/random/economy',
    date: '2023-06-10',
    categoryId: 10,
  },
];
