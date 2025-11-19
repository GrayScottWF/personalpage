import React from 'react';
import {
    StyledMaskDark,
    StyledContacts,
    StyledTitle,
    StyledVS,
    StyledLinkArea,
    StyledSubtitle,
    StyledSocialLinks,
    StyledSocialLink,
    StyledSocialIcon,
    StyledSocialName,
    StyledFormArea,
    StyledFormSubtitle,
    StyledSendEmail,
    StyledContactForm,
    StyledFormTitle,
    StyledFormItem,
    StyledFormMsg,
    StyledFormBtn
} from './StyledContacts'
import { faInstagram, faXTwitter, faLinkedin, faGithub, faDiscord, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container } from 'react-bootstrap';





function Contact() {
    return(
        <StyledContacts>
            <StyledMaskDark />
                <Container>
                    <StyledTitle>聯絡方式</StyledTitle>
                    <StyledVS />
                    <Row>
                        <Col md={6} sm={12}>
                            <StyledLinkArea>
                                <StyledSubtitle>個人帳號</StyledSubtitle>
                                <StyledSocialLinks>
                                    <Row>
                                        <Col>
                                            <StyledSocialLink href="#!">
                                                <StyledSocialIcon>
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </StyledSocialIcon>
                                                <StyledSocialName>Email</StyledSocialName>
                                            </StyledSocialLink>
                                        </Col>
                                        <Col>
                                            <StyledSocialLink href="#!">
                                                <StyledSocialIcon>
                                                    <FontAwesomeIcon icon={faGithub}  />
                                                </StyledSocialIcon>
                                                <StyledSocialName>Github</StyledSocialName>
                                            </StyledSocialLink>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <StyledSocialLink href="#!">
                                            <StyledSocialIcon>
                                                <FontAwesomeIcon icon={faInstagram}  />
                                            </StyledSocialIcon>
                                            <StyledSocialName>Instagram</StyledSocialName>
                                        </StyledSocialLink>
                                        </Col>
                                        <Col>
                                        <StyledSocialLink href="#!">
                                            <StyledSocialIcon>
                                                <FontAwesomeIcon icon={faXTwitter}  />
                                            </StyledSocialIcon>
                                            <StyledSocialName>Twitter</StyledSocialName>
                                        </StyledSocialLink>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <StyledSocialLink href="#!">
                                            <StyledSocialIcon>
                                                <FontAwesomeIcon icon={faLinkedin}  />
                                            </StyledSocialIcon>
                                            <StyledSocialName>Linkedin</StyledSocialName>
                                        </StyledSocialLink>
                                        </Col>
                                        <Col>
                                        <StyledSocialLink href="#!">
                                            <StyledSocialIcon>
                                                <FontAwesomeIcon icon={faDiscord}  />
                                            </StyledSocialIcon>
                                            <StyledSocialName>Discord</StyledSocialName>
                                        </StyledSocialLink>
                                        </Col>
                                    </Row>
                                </StyledSocialLinks>
                            </StyledLinkArea>
                        </Col>
                        <Col md={6} sm={12}>
                            <StyledFormArea>
                                <StyledFormSubtitle>留言至信箱</StyledFormSubtitle>
                                <StyledSendEmail>
                                    <StyledContactForm id="contactform">
                                        <Row>
                                            <Col lg={6} md={12}>
                                                <StyledFormTitle className="form-name form-title">姓名</StyledFormTitle>
                                                <StyledFormItem type="text" id="name" name="name" required />
                                            </Col>
                                            <Col lg={6} md={12}>
                                                <StyledFormTitle className="form-email form-title">信箱</StyledFormTitle>
                                                <StyledFormItem type="email" id="email" name="email" required />
                                            </Col>
                                        </Row>

                                        <StyledFormTitle>留言</StyledFormTitle>
                                        <StyledFormMsg
                                            id="message"
                                            name="message"
                                            rows={6}
                                            required
                                        ></StyledFormMsg>

                                        <StyledFormBtn type="submit" className="form-btn">送出</StyledFormBtn>
                                    </StyledContactForm>
                                </StyledSendEmail>
                            </StyledFormArea>
                        </Col>
                    </Row>
                </Container>
        </StyledContacts>
    )
}

export default Contact