import React from 'react';

import {Container, Navbar} from 'reactstrap';


class Header extends React.Component {
  render() {
    return (
      <header className="mb1">
        <nav className="navbar navbar-dark bg-primary" style={{ height: 20 }}></nav>
        <Navbar color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 100 }}>
          <Container>
          <a href="/home"><img src="img/MVS_logo.png" alt="MvsLogo" style={{width : "270px"}}/></a>
          </Container>
        </Navbar>
      </header>
    )
  };
}
export default Header;