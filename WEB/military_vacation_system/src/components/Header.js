import React from 'react';

import {
  Container, Row, Col, Navbar, Nav,
  NavLink, NavItem
} from 'reactstrap';


class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>

          <Container>
            <Row noGutters className="position-relative w-100 align-items-center">

              <Col className="d-none d-lg-flex justify-content-start">
                <Nav className="mrx-auto" navbar>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/home">This Page..</NavLink>
                  </NavItem>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/project">Project</NavLink>
                  </NavItem>

                </Nav>
              </Col>
            </Row>
          </Container>

        </Navbar>
      </header>
    )
  };
}
export default Header;