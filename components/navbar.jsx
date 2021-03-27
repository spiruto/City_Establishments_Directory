import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Context from "./context";
const Navb = (props) => {
  return (
    <Context.Consumer>{value=>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand as={Link} passHref={true} href="/">
          <a>
            <Image
              width={150}
              height={60}
              src="/assets/logo.png"
              alt="Logo del sitio"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              passHref={true}
              className="ml-1"
              href="/registro"
            >
              Registro
            </Nav.Link>
{value.isAuthenticated?
            <Nav.Link onClick={value.logout}>
              Cerrar Sesion
            </Nav.Link>
            :
            <Nav.Link as={Link} passHref={true} href="/autenticar">
              Autenticar
            </Nav.Link>
}
          </Nav>
        </Navbar.Collapse>
      </Navbar>}
    </Context.Consumer>
  );
};
export default Navb;
