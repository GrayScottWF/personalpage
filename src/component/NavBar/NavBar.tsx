import React from 'react';
import {Link} from 'react-router-dom'
import { 
  StyledNavBar,
  StyledNav,
  StyledNavNames,
  StyledNameCh,
  StyledNavItems,
  StyledNavItem,
  StyledNavLink,
  StyledNavToggle,
} from './StyledNavBar';
import { Container } from 'react-bootstrap';



function NavBar() {
  const [navToggle, setNavToggle] = React.useState(false)

  return(
    <StyledNavBar>
        <Container>
          <StyledNav>
            <Link to="/">
              <StyledNavNames>
                <StyledNameCh>張佐圻</StyledNameCh>
                <span>Gray Soctt</span>
              </StyledNavNames>
            </Link>
            <StyledNavItems className={navToggle ? 'active':''}>
                <StyledNavItem>
                  <Link to="/" onClick={() => {setNavToggle(false)}}>
                    <StyledNavLink>主頁</StyledNavLink>
                  </Link>
                </StyledNavItem>
                <StyledNavItem>
                  <Link to="/exp" onClick={() => {setNavToggle(false)}}>
                    <StyledNavLink>經歷</StyledNavLink>
                  </Link>
                </StyledNavItem>
                <StyledNavItem>
                  <Link to="/projects" onClick={() => {setNavToggle(false)}}>
                    <StyledNavLink>作品集</StyledNavLink>
                  </Link>
                </StyledNavItem>
                <StyledNavItem>
                  <Link to="/contacts" onClick={() => {setNavToggle(false)}}>
                    <StyledNavLink>聯絡方式</StyledNavLink>
                  </Link>
                </StyledNavItem>
              {/* </ul> */}
              
            {/* </div> */}
            </StyledNavItems>
            <StyledNavToggle  className={navToggle ? 'active':''} onClick={() => {setNavToggle(!navToggle)}}>
                <span></span>
                <span></span>
                <span></span>
              </StyledNavToggle>
          </StyledNav>
        </Container>
    </StyledNavBar>

  )
}

export default NavBar