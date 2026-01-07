import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">ZeroSmoke</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/terms">Terms</Nav.Link>
              <Nav.Link as={Link} to="/privacy">Privacy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <footer className="bg-dark text-light py-4 mt-5">
        <Container className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} ZeroSmoke App. All rights reserved.</p>
          <div className="mt-2">
             <Link to="/terms" className="text-light text-decoration-none me-3">Terms of Service</Link>
             <Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
