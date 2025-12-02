import React from 'react';
import {
    StyledFooter,
    StyledFooterItem,
    StyledCr,
    StyledSocialBtns,
    StyledSocialItem,
    StyledSocialBtn,

} from './StyledFooter'
import { faInstagram, faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';



function Footer() {
    return(
        <StyledFooter>
            <Container>
                <StyledFooterItem>
                    <StyledCr>© 2025 by Gray Scott</StyledCr>
                    <StyledSocialBtns>
                        {/* <StyledSocialItem href='#!'>
                            <StyledSocialBtn>
                                <FontAwesomeIcon className='social-btn' icon={faInstagram} />
                            </StyledSocialBtn>
                        </StyledSocialItem>
                        <StyledSocialItem href='#!'>
                            <StyledSocialBtn>
                                <FontAwesomeIcon className='social-btn' icon={faXTwitter} />
                            </StyledSocialBtn>
                        </StyledSocialItem> */}
                        <StyledSocialItem href='https://www.linkedin.com/in/%E4%BD%90%E5%9C%BB-%E5%BC%B5-94b349398/'>
                            <StyledSocialBtn>
                                <FontAwesomeIcon className='social-btn' icon={faLinkedin} />
                            </StyledSocialBtn>
                        </StyledSocialItem>
                        <StyledSocialItem href='https://github.com/GrayScottWF'>
                            <StyledSocialBtn>
                                <FontAwesomeIcon className='social-btn' icon={faGithub} />
                            </StyledSocialBtn>
                        </StyledSocialItem>
                    </StyledSocialBtns>
                </StyledFooterItem>
            </Container>
        </StyledFooter>
    )
}

export default Footer