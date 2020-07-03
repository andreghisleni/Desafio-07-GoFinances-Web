import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';
import MenuLink from '../MenuLink';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <MenuLink to="/" exact>
          Listagem
        </MenuLink>
        <MenuLink to="/import">Importar</MenuLink>
      </nav>
    </header>
  </Container>
);

export default Header;
