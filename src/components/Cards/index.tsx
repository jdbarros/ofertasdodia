import SectionTitle from '../SectionTitle';
import CardsItens from './CardsItens';
import { Container } from './styles';

interface ICards {
  key?: string;
  slug?: string;
  description?: string;
  link?: string;
  thumbnail?: string;
  title?: string;
}

interface CardProps {
  ofertas: ICards[];
}

function Cards({ ofertas }: CardProps) {
  return (
    <>
      <SectionTitle title="Ofertas do dia" />
      <Container>
        {ofertas.map(oferta => (
          <CardsItens
            key={oferta.slug}
            img={oferta.thumbnail}
            link={oferta.link}
            title={oferta.title}
            description={oferta.description}
          />
        ))}
      </Container>
    </>
  );
}

export default Cards;
