import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

interface Props {
  to: string;
  exact?: boolean;
}
const MenuLink: React.FC<Props> = ({ to, exact = false, children }) => {
  const match = useRouteMatch({
    path: to,
    exact,
  });
  return (
    <Container to={to} className={match ? 'active' : ''}>
      {children}
    </Container>
  );
};

export default MenuLink;
