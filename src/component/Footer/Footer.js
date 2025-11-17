import React from 'react';
import {StyledFooter} from './StyledFooter'
import { faInstagram, faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return(
        <StyledFooter>
            <footer className="footer" id="pageFooter">
                <div className="container">
                <div className="footer-item">
                    <div className="cr">© 2025 by Gray Scott</div>
                    <div className="social-btns">
                        <a href="#!" className="social-item">
                            <FontAwesomeIcon className='social-btn' icon={faInstagram} />
                        </a>
                        <a href="#!" className="social-item">
                            <FontAwesomeIcon className='social-btn' icon={faXTwitter} />
                        </a>
                        <a href="#!" className="social-item">
                            <FontAwesomeIcon className='social-btn' icon={faLinkedin} />
                        </a>
                        <a href="#!" className="social-item">
                            <FontAwesomeIcon className='social-btn' icon={faGithub} />
                        </a>
                    </div>
                </div>
                </div>
            </footer>
        </StyledFooter>
    )
}

export default Footer