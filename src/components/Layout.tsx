import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar expand="lg" className="site-nav">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="brand-mark" src="/cloud.png" alt="" width="320" height="123" />
            ZeroSmoke
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="site-nav" aria-label="Toggle navigation" />
          <Navbar.Collapse id="site-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/terms">Terms</Nav.Link>
              <Nav.Link as={NavLink} to="/privacy">Privacy</Nav.Link>
              <Nav.Link as={NavLink} to="/support">Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1">
        <div className="page" key={pathname}>
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <Container className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
          <span className="footer-brand">
            <img className="brand-mark" src="/cloud.png" alt="" width="320" height="123" />
            ZeroSmoke
          </span>
          <nav className="d-flex gap-4" aria-label="Footer">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/support">Support</Link>
          </nav>
          <span>&copy; {new Date().getFullYear()} ZeroSmoke</span>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
