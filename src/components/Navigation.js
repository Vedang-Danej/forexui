import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-dark-subtle">
      <Nav>
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/liverates">
          <Nav.Link>Live Rates</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/convert">
          <Nav.Link>Convert</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
