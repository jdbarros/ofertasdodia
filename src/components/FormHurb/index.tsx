import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormHurb() {
  return (
    <>
      <Container>
        <SectionTitle
          title={<>Eu quero é viajar :)</>}
          description={
            <>
              Preencha o formulário abaixo e
              <br />
              veja varias opções no Hurb.
            </>
          }
        />
      </Container>
      <Form />
    </>
  );
}

export default FormHurb;
