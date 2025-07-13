import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>TayeCommerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">

              <LinkContainer to='/cart'>
                <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
              </LinkContainer>
              
              <LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
              </LinkContainer> 
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

/* eslint-disable */
// Components to use later
{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */ }

{/* <NavDropdown title="Profile" id="collapsible-nav-dropdown">
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">
Another action
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
Separated link
</NavDropdown.Item>
</NavDropdown> */}

{/* <Form className="d-flex me-auto">
  <Form.Control
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
  />
  <Button type="submit">Submit</Button>
</Form> */}
