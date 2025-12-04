import React, { useState } from 'react';
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
import Copytool from '../Copytool'




function Contact() {
    const textToCopy = "ws921208s@gmail.com";
    const [isCopied, setIsCopied] = useState(false);

    // 處理點擊事件的函數
    const handleCopyClick = async () => {
        try {
        // 使用 Clipboard API 進行複製
        await navigator.clipboard.writeText(textToCopy);
        
        // 設置狀態為已複製，並在短時間後恢復
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000); // 2 秒後訊息消失

        } catch (err) {
        console.error('複製失敗: ', err);
        alert('複製失敗');
        }
    };

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
                                        <Col sm={6}>
                                            <StyledSocialLink onClick={handleCopyClick} href="#!">
                                                <StyledSocialIcon>
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </StyledSocialIcon>
                                                <StyledSocialName>{isCopied ? '已複製信箱' : 'G-mail'}</StyledSocialName>
                                            </StyledSocialLink>
                                        </Col>
                                        <Col sm={6}>
                                            <StyledSocialLink href="https://github.com/GrayScottWF">
                                                <StyledSocialIcon>
                                                    <FontAwesomeIcon icon={faGithub}  />
                                                </StyledSocialIcon>
                                                <StyledSocialName>Github</StyledSocialName>
                                            </StyledSocialLink>
                                        </Col>
                                        <Col sm={6}>
                                        <StyledSocialLink href="#!">
                                            <StyledSocialIcon>
                                                <FontAwesomeIcon icon={faInstagram}  />
                                            </StyledSocialIcon>
                                            <StyledSocialName>Instagram</StyledSocialName>
                                        </StyledSocialLink>
                                        </Col>
                                        <Col sm={6}>
                                        <StyledSocialLink href="#!">
                                            <StyledSocialIcon>
                                                <FontAwesomeIcon icon={faXTwitter}  />
                                            </StyledSocialIcon>
                                            <StyledSocialName>Twitter</StyledSocialName>
                                        </StyledSocialLink>
                                        </Col>
                                        <Col sm={6}>
                                        <StyledSocialLink href="https://www.linkedin.com/in/%E4%BD%90%E5%9C%BB-%E5%BC%B5-94b349398/">
                                            <StyledSocialIcon>
                                                <FontAwesomeIcon icon={faLinkedin}  />
                                            </StyledSocialIcon>
                                            <StyledSocialName>Linkedin</StyledSocialName>
                                        </StyledSocialLink>
                                        </Col>
                                        <Col sm={6}>
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