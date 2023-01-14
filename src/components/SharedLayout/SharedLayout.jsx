import { Outlet } from "react-router-dom";
import {  Header, Link,Item,LinkLog,ItemLogo} from "../../components/App.styled"
import { Suspense } from 'react';
import FooterM from "../Footer/Footer";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const SharedLayout = () => {

  return (
    <>
      <Header collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar>  <ItemLogo><LinkLog to="/">Фестивальний 3.0</LinkLog> </ItemLogo> </Navbar>
        <Navbar.Toggle   aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Item><Link to="/service">Послуги оренди</Link> </Item></Nav.Link>
            <Nav.Link><Item><Link to="/rules">Правила і умови </Link> </Item></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Header>

          <Suspense>
          <Outlet />
        </Suspense>
<FooterM/>
      
      </>
   
  );
};

