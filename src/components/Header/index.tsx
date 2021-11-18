// import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <p>
        Site com links de afiliados <br />
        Os preços podem mudar a qualquer momento!
      </p>
      <ul>
        {/* <NavLink title="Home" path="#" /> */}
        {/* <NavLink title="Projetos" path="#" /> */}
      </ul>
    </Container>
  );
}

export default Header;
