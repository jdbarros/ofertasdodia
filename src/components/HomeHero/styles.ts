import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin: 0 auto;
  max-width: 85rem;

  > div {
    flex: 4;
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
      text-align: center;
    }
  }
`;

export const TextContainer = styled.section`
  h1 {
    font-size: 4rem;
    color: ${({ theme }) => theme.primary};
    text-align: center;

    /* strong {
      background-color: #010;

    } */
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s !important;
  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:last-child {
    align-self: flex-end;
  }
  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }
  span.purple {
    color: #c38cdd;
  }
  span.blue {
    color: #7ac7e3;
  }
  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
