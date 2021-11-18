import { Container } from './styles';

interface CardsProps {
  img?: string;
  title?: string;
  description?: string;
  link?: string;
}

function CardsItens({ img, link, title, description }): CardsProps {
  return (
    <>
      <Container>
        <div className="card">
          <div className="card_body">
            <img src={img} className="card__image" />
            <h2 className="card__title">{title}</h2>
            <h3 className="card__description">{description}</h3>
          </div>

          <button className="card__btn">
            <a href={link} target="_blank" rel="noreferrer">
              Ver Ofertas
            </a>
          </button>
        </div>
      </Container>
    </>
  );
}
export default CardsItens;
