import React from 'react';
import { Button, Container, Nav, Navbar, Form } from 'react-bootstrap'; // ✅ bootstrap의 Form 사용
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      {/* 네비게이션 바 */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Movies React</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 자식 라우트가 렌더링될 자리 */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
