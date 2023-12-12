import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import LogoutComponent from "./LogoutComponent";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <NavBar bg="dark" variant="dark" expand="lg">
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/dashboard">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/new">
            New
          </Nav.Link>
        </Nav>
        {/* You can add additional components or elements here */}
      </NavBar.Collapse>
      <LogoutComponent />
    </NavBar>
  );
};

export default NavBarComponent;
