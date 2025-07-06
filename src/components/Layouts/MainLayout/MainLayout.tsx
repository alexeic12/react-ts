import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import {routes} from "../../../routes/index"
import { capitalizeFirstLetter } from "../../../utils";

export default function MainLayout() {

  const lastChildRoute = (routes[0].children?.length ?? 0) - 1;

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className={styles.mainNavbar}
      >
        <Container>
          <Navbar.Brand className={styles.navbarBrand} as={Link} to="/">
            C/A &gt;
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse
            id="main-navbar-nav"
            className={styles.navbarCollapse}
          >
            <Nav className="me-auto">
    
            {
              
              //Dinamically add navbar components
              routes[0].children?.map((childRoute, index)=>{
                
                if(childRoute.index){
                  return <Nav.Link className={styles.navLink} as={Link} to={childRoute.path || "/"}>
                  Home
                </Nav.Link>
                }else if(index !== lastChildRoute){
                  return <Nav.Link className={styles.navLink} as={Link} to={childRoute.path || "/"}>
                  {capitalizeFirstLetter(childRoute.path|| "Err")}
                </Nav.Link>
                }
                
                
              })

              
            }
            
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={styles.mainContainer}>
        <Container>
            <Outlet />
        </Container>
      </div>
    </>
  );
}
