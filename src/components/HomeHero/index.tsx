import Image from 'next/image';
import { Container, TextContainer } from './styles';

function HomeHero() {
  return (
    <Container>
      <div>
        <TextContainer>
          <h1>Estamos de olho nas melhores ofertas para você!</h1>
        </TextContainer>
      </div>

      <Image
        src="/gift.svg"
        alt="Picture of the author"
        width="300"
        height="300"
      />
    </Container>
  );
}

export default HomeHero;
