import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContatc() {
  return (
    <>
      <Container>
        <SectionTitle
          title={
            <>
              Qual oferta você quer <br /> ver aqui?
            </>
          }
          description={
            <>
              Preencha o formulário abaixo que
              <br />
              iremos buscar para você.
            </>
          }
        />
        <div className="imageForm">
          <Image
            src="/ofertaForm.svg"
            alt="Picture of the author"
            width="300"
            height="300"
          />
        </div>
      </Container>
      <Form />
    </>
  );
}

export default FormContatc;
