import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  margin: 0 auto;
  max-width: 85rem;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  margin: 0 auto;
  max-width: 85rem;
  a {
    color: #fff;
    border: none;
    padding: 2rem 4rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.primary};
    transition: 0.5s;
    width: fit-content;
    &:disabled {
      opacity: 0.5;
    }
    &:not(:disabled):hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;

    .imageForm {
      margin-top: -80px;
    }
  }
`;
