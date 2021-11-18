import styled from 'styled-components';

export const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 2rem;
  justify-content: center;
  color: ${({ theme }) => theme.textHighlight};

  }



  .card {
    overflow: hidden;
    box-shadow: 0 2px 15px ${({ theme }) => theme.background};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: default;
    transition: transform 100ms ease-in;
    background-color: ${({ theme }) => theme.background};


    a {
      color: #fff;
    }


    &__image {
      height: 12rem;
      width: 100%;
      object-fit: cover;
    }


    &__title {
      padding: 1rem;
      height: 5rem;
      font-size: 1rem;
      text-align: center;
    }

    &__description {
      padding: 0 1rem;
      text-align: center;
      font-size: 1rem;

    }

    &__btn {
      padding: 1rem;
      font-family: inherit;
      font-weight: bold;
      font-size: 1rem;
      margin-top: 1rem;
      border: 2px solid ${({ theme }) => theme.inputBackground};
      background-color: ${({ theme }) => theme.inputBackground};
      color: #fff;
      border-radius: $radius;
      transition: background 200ms ease-in, color 200ms ease-in;
    }

    &:hover {
      transform: scale(1.02);
    }

    &:hover &__btn {
      background: #fff;
      color: white;
    }
  }
`;
