import {Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const MyNav = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Music Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as ={Link} to ='/'>Home</Nav.Link>
                        <Nav.Link as ={Link} to ='/favourites'>Favourites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default MyNav;