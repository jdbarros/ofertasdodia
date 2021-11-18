import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 2rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 3rem;
  margin-top: -5rem;
  

`;
