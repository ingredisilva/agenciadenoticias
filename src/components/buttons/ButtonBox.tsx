import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { AiFillFileText } from 'react-icons/ai';
import { FaHammer, FaHome, FaSearch, FaTools } from 'react-icons/fa';
import { GrSchedule } from 'react-icons/gr';

import { ButtonBox } from '@/components/buttons/NavButton';

const NavigationButtons: FC = () => {
  const router = useRouter();
  const isActive = (href: string) => {
    return router.pathname === `/${href}`;
  };

  return (
    <div className='xs:my-4 xs:justify-center xs:gap-3 xs:p-4 flex flex-wrap gap-2 md:my-0 '>
      <ButtonBox
        icon={FaHome}
        label='Inicio'
        isActive={isActive('')}
        onClick={() => router.push('/')}
      />

      <ButtonBox
        icon={FaSearch}
        label='Buscar'
        isActive={isActive('buscar-servicos')}
        onClick={() => router.push('/buscar-servicos')}
      />
      <ButtonBox
        icon={FaTools}
        label='Meus Serviços'
        isActive={isActive('meus-servicos')}
        onClick={() => router.push('/meus-servicos')}
      />

      <ButtonBox
        icon={FaTools}
        label='Meus Serviços'
        isActive={isActive('meus-servicos')}
        onClick={() => router.push('/meus-servicos')}
      />
      <ButtonBox
        icon={AiFillFileText}
        label='Atualizar Cadastro'
        isActive={isActive('/meu-cadastro')}
        onClick={() => router.push('/meu-cadastro')}
      />

      {/*       <ButtonBox
        icon={AiFillFileText}
        label='Informações'
        isActive={isActive('')} 
        onClick={() => router.push('')}
      /> */}
      <ButtonBox
        icon={AiFillFileText}
        label='Denúncias'
        isActive={isActive('/denuncias')}
        onClick={() => router.push('/denuncias')}
      />

      <ButtonBox
        icon={AiFillFileText}
        label='Relatórios'
        isActive={isActive('/gerar-relatorios')}
        onClick={() => router.push('/gerar-relatorios')}
      />
      <ButtonBox
        icon={FaHammer}
        label='Homologar'
        isActive={isActive('/homologacoes')}
        onClick={() => router.push('/homologacoes')}
      />
      {/*           <ButtonBox
            icon={AiFillFileText}
            label='Gestão de Cadastros'
            isActive={isActive('/gestão-de-cadastros')}
            onClick={() => router.push('/gestão-de-cadastros')}
          /> */}
      <ButtonBox
        icon={FaTools}
        label='Áreas e Serviços'
        isActive={isActive('areas-e-servicos')}
        onClick={() => router.push('/areas-e-servicos')}
      />
      <ButtonBox
        icon={GrSchedule}
        label='Palestras'
        isActive={isActive('/cadastrar-palestras')}
        onClick={() => router.push('/cadastrar-palestras')}
      />
    </div>
  );
};

export default NavigationButtons;
