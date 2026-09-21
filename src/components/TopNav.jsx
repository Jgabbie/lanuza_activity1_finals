import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TopNav({ cartCount }) {
    return (
        <Navbar
            expand="lg"
            className='shadow-sm py-3 sticky-top'
            style={{ backgroundColor: '#305797' }}
            variant='dark'
        >
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className='font-bold text-xl text-white'
                >
                    AniShop
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse
                    id="top-navbar"
                >
                    <Nav
                        className='ms-auto gap-2'
                    >
                        <Nav.Link
                            as={Link}
                            to="/"
                            className='text-white'
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/checkout"
                            className='text-white'
                        >
                            Checkout
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/cart"
                            className='d-flex align-items-center gap-2  text-white'
                        >
                            Cart
                            <Badge bg='light' text='dark' pill>
                                {cartCount}
                            </Badge>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
