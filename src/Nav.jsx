import { Button } from "@mui/base/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../images/logo-bookmark.svg";
function OffcanvasExample() {
  return (
    <>
      <Navbar expand={"md"} >
        <Container fluid >
          <Navbar.Brand href="#">
            <span style={{ paddingTop: ".4rem" }}>
              <img width={"150px"} src={logo} alt="Bookmark logo" />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <span style={{ paddingTop: ".4rem" }}>
                  <img width={"150px"} src={logo} alt="Bookmark logo" />
                </span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <Nav className="justify-content-end flex-grow-1 " >
                <Nav.Link  href="#feature">FEATURES</Nav.Link>
                <Nav.Link  href="#action2">PRICING</Nav.Link>
                <Nav.Link  href="#contact">CONTACT</Nav.Link>
                <Button className="login-btn">LOGIN</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
