import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavbarPage() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Link to="/" className="navbar-brand">Tes Junior Programmer</Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/add-product" className="nav-link">Tambahkan Produk</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPage;