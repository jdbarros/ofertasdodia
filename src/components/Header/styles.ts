import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: Boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  ul {
    display: flex;
    gap: 2 rem;
    align-items: center;
  }

  p {
    color: gray;
    font-size: 0.8rem;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    margin-right: 2rem;
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
