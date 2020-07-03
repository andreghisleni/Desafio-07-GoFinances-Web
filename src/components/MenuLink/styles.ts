import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  & {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: opacity 0.2s;
    padding-bottom: 10px;

    & + a {
      margin-left: 32px;
    }

    &:hover {
      opacity: 0.6;
    }
  }
  &.active {
    border-bottom-width: 2px;
    border-bottom-color: #ff872c;
    border-bottom-style: solid;
  }
`;
