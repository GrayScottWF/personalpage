import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function AppNavbar() {
  return (
    <Navbar bg='linear-gradient(173deg, rgba(75, 64, 222, 1) 33%, rgba(195, 149, 207, 1) 66%);' expand="lg">
      <Container>
        <Navbar.Brand>
            <Link className="nav-title" to="/">
                <span className="name name-ch">張佐圻</span>
                <span className="name name-en">Gray Soctt</span>
            </Link>
        </Navbar.Brand>
        {/* expand="lg" 表示在 lg 斷點以下會折疊選單 */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Link to="/" className="nav-link">主頁</Link>
            <Link to="/exp" className="nav-link">經歷</Link>
            <Link to="/projects" className="nav-link">作品集</Link>
            <Link to="/contacts" className="nav-link">聯絡方式</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar