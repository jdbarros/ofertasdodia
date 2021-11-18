import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>

        <p>© Copyright 2021 - Diego Barros - Divulgações</p>
        <section>
          <FaInstagramSquare
            onClick={() =>
              handleRedirect('https://www.instagram.com/jdiegobarros/')
            }
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/jdbarros')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/diego-barros-8a271b1ab/'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
