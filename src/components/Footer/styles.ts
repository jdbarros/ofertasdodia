import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  /* border-top: 1px solid ${({ theme }) => theme.backgroundLight}; */
  height: 5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  > div {
    margin: 0 auto;
    max-width: 85rem;
    margin-bottom: 15px;
    margin-top: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.inputBackground};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1rem;
    }
    > section {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 15px;
      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.inputBackground};
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }
    @media (max-width: 450px) {
      button {
        font-size: 0.5rem;
      }
      > section {
        gap: 0.5rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
