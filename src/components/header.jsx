import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { logout } from '../firebase';
import logos from '../images/logos.png';
import { NavLink } from 'react-router-dom';
import { GiBladeBite } from 'react-icons/gi';
import { toast } from 'react-toastify';
function Header() {
  const logOut = () => {
    logout();
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to='/' onClick={
            () => {
              navigator.clipboard.writeText(`76464269`)
                .then(() => {
                  toast.success(`Fadia Number Copied!`);
                })
                .catch((e) => toast.error(`Error copy: ${e}`))
            }
          }>
            <img src={logos} alt="LOGO" style={{
              width: '70px'
            }} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto p-2">
            <Button variant="danger" onClick={logOut}>LogOut</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;