import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
const Navb = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand as={Link} href="/">
                <Image width={150} height={60} src="/assets/logo.png" alt="Logo del sitio"/>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} className="ml-1" href="/registro">Registro</Nav.Link>
                    <Nav.Link as={Link} href="/autenticar">Autenticar</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Navb;