import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import {ReactComponent as Logo } from '../images/logo.svg'; 

const NavbarStyle = {
  backgroundColor: 'black'
}

const Header = ({title}) => {
    return(
        <Navbar style={NavbarStyle}  variant="light">
          <Container>
          <Logo alt={title}style={{ maxWidth: '12rem', maxHeight: '3rem'}}/>
          </Container>
      </Navbar>
    
    )
}

export default Header;