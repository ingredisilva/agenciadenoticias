# ⚡️ Next.js 13

# ⚛️ React 18

# ✨ TypeScript

# 💨 Tailwind CSS 3

# 🃏 Jest — Configurado para testes unitários

# 📈 Absolute Import and Path Alias — Importe componentes com prefixo @/

# 📏 ESLint

# 💖 Prettier

# 🐶 Husky & Lint Staged — Roda scripts nos arquivos antes de serem enviados

# 👷 Github Actions

# 🗺 Site Map — Gera automaticamente o sitemap.xml

# React Slick para sliders e carrosseis

# Yup para validação de formulários

Gerenciamento de estado da aplicação: Context API, discutir a utilização do Redux caso necessário.

## Git Clone

### Instalar dependências:

yarn install (Não misture com outros gerenciadores de pacotes)

### Rodar servidor de desenvolvimento:

yarn dev

### Testar o build e encontrar warnings:

yarn build

### Ao instalar uma nova dependência, adicione também o pacote de types para a mesma:

Exemplo: yarn add @types/react

### Abra em: http://localhost:3000/

### Commits: Usar commits semânticos conforme o padrão definido pelo link https://www.conventionalcommits.org/en/v1.0.0/

Exemplos:

- chore: add Oyster build script // Pequenas alterações que não são novas funcionalidades.
- docs: explain hat wobble // Semelhante a uma wiki; documentações etc.
- feat: add beta sequence // Criação de nova funcionalidade;
- fix: remove error message // Correção de bugs
- refactor: share logic 4d3d3d3 // Refatoração de um código
- style: convert tabs to spaces // Alteração em estilos, formatação de código etc.
- test: ensure that increment // Criação de testes da sua aplicação

### Abrir pull request (PR) e solicitar revisão de código.

Sempre teste a funcionalidade antes de abrir um PR.

O projeto possui regras de estilo e formatação com Prettier e Eslint.

Resolva os warnings antes de subir (Husky e lint vão impedir).

Sempre separe a lógica do componente da renderização.
Conventional Commits
Conventional Commits
A specification for adding human and machine readable meaning to commit messages

## Organização de pastas do projeto:

- /components: pasta que contém todos os componentes reutilizáveis do projeto;
- /pages: pasta que contém todas as páginas do projeto, cada pasta representa uma rota;
- /public: pasta que contém os arquivos públicos como imagens, ícones etc.;
- /styles: pasta que contém os arquivos de estilos globais e configurações do Tailwind CSS;
- /types: pasta que contém todos os tipos/interfaces utilizados no projeto;
- /utils: pasta que contém todas as funções utilitárias do projeto;
- .eslintrc: arquivo de configuração do ESLint;
- .gitignore: arquivo que especifica os arquivos/pastas a serem ignorados pelo Git;
- jest.config.js: arquivo de configuração do Jest;
- next.config.js: arquivo de configuração do Next.js;
- package.json: arquivo que contém as informações do projeto e as dependências;
- README.md: arquivo que contém as informações sobre o projeto;
- tsconfig.json: arquivo de configuração do TypeScript;
- yarn.lock: arquivo que contém as versões exatas das dependências instaladas pelo Yarn;
  -/constant/env.ts: Variáveis de ambiente;
  -/lib/tests: testes do Open Graph;
  -/pages/api: concentra todas as chamadas da api;

## Componentes:

## <Image src='' /> para imagens

## SVG's podem ser importados e usados diretamente como componente

ex: <Logomarca />;

ATENÇÃO
-Para criar uma nova rota basta criar uma pasta com um arquivo index.tsx e importar o componente <Page />
