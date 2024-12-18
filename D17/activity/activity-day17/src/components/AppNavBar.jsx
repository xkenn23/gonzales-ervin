import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">
        Team Planner
      </Navbar.Brand>{" "}
      {/* Replace href with Link */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>{" "}
          {/* Use Link here */}
          <Nav.Link as={Link} to="/team">
            Team
          </Nav.Link>{" "}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
