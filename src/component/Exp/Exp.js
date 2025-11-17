import React from 'react';
import {
    StyledMaskDark,
    StyledExp,
    StyledMainTitle,
    StyledVS,
    StyledTimeLine,
    StyledTimeDot,
    StyledTime,
    StyledExpJob,
    StyledExpSubtitle,
    StyledExpPara,
    StyledCard,
    StyledImgContainer,
    StyledImg,
    StyledCardTitle,
    StyledCardInfo,
    StyledProjectsBtns,
    StyledMoreProjectsBtn,

} from './StyledExp'
import ImgPv from '../images/imgData'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Exp() {
    return(
        <StyledExp>
            <StyledMaskDark />
                <Container>
                    <StyledMainTitle>經歷</StyledMainTitle>
                    <StyledVS />
                    <Row>
                        <Col xs={4} sm={4} md={3} className='col'>
                            <StyledTimeLine>
                                <StyledTimeDot />
                                <StyledTime>至今 - 2025</StyledTime>
                                <StyledExpJob>前端工程師</StyledExpJob>
                            </StyledTimeLine>
                        </Col>
                        <Col xs={8} sm={8} md={9}>
                            <StyledExpSubtitle>公司名稱</StyledExpSubtitle>
                            <StyledExpPara>
                                負責內容 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus dolores
                                illo delectus nostrum est, aspernatur ab quod corrupti reiciendis. Error deleniti
                                aliquid ipsa deserunt amet, dolor iusto neque sequi.
                            </StyledExpPara>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} sm={4} md={3} className='col'>
                            <StyledTimeLine>
                                <StyledTimeDot />
                                <StyledTime>2025 - 2025</StyledTime>
                                <StyledExpJob>前端工程師</StyledExpJob>
                            </StyledTimeLine>
                        </Col>
                        <Col xs={8} sm={8} md={9}>
                            <StyledExpSubtitle>公司名稱</StyledExpSubtitle>
                            <StyledExpPara>
                                負責內容 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus dolores
                                illo delectus nostrum est, aspernatur ab quod corrupti reiciendis. Error deleniti
                                aliquid ipsa deserunt amet, dolor iusto neque sequi.
                            </StyledExpPara>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} sm={4} md={3} className='col'>
                            <StyledTimeLine>
                                <StyledTimeDot />
                                <StyledTime>2025 - 2025</StyledTime>
                                <StyledExpJob>前端工程師</StyledExpJob>
                            </StyledTimeLine>
                        </Col>
                        <Col xs={8} sm={8} md={9}>
                            <StyledExpSubtitle>公司名稱</StyledExpSubtitle>
                            <StyledExpPara>
                                負責內容 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus dolores
                                illo delectus nostrum est, aspernatur ab quod corrupti reiciendis. Error deleniti
                                aliquid ipsa deserunt amet, dolor iusto neque sequi.
                            </StyledExpPara>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <StyledMainTitle>近期專案</StyledMainTitle>
                    <StyledVS />
                    <Row>
                        {/* <div className="col-lg-3 col-sm-6 col-xs-6 col-se"> */}
                        <Col xs={6} lg={3} className='col-se'>
                            <StyledCard>
                                <StyledImgContainer>
                                    <StyledImg style={{backgroundImage: `url(${ImgPv[0].src})`} } />
                                </StyledImgContainer>
                                <StyledCardTitle>咖啡廳網站</StyledCardTitle>
                                <StyledCardInfo>
                                    咖啡廳的官方網站，包含商家的企業精神、商品列表、聯絡方式等資訊
                                </StyledCardInfo>
                            </StyledCard>
                        </Col>
                        {/* </div> */}
                        {/* <div className="col-lg-3 col-sm-6 col-xs-6 col-se"> */}
                        <Col xs={6} lg={3} className='col-se'>
                            <StyledCard>
                                <StyledImgContainer>
                                    <StyledImg style={{backgroundImage: `url(${ImgPv[1].src})`} } />
                                </StyledImgContainer>
                                <StyledCardTitle>咖啡廳網站</StyledCardTitle>
                                <StyledCardInfo>
                                    咖啡廳的官方網站，包含商家的企業精神、商品列表、聯絡方式等資訊
                                </StyledCardInfo>
                            </StyledCard>
                        </Col>
                        {/* </div> */}
                        {/* <div className="col-lg-3 col-sm-6 col-xs-6 col-se"> */}
                        <Col xs={6} lg={3} className='col-se'>
                            <StyledCard>
                                <StyledImgContainer>
                                    <StyledImg style={{backgroundImage: `url(${ImgPv[0].src})`} } />
                                </StyledImgContainer>
                                <StyledCardTitle>咖啡廳網站</StyledCardTitle>
                                <StyledCardInfo>
                                    咖啡廳的官方網站，包含商家的企業精神、商品列表、聯絡方式等資訊
                                </StyledCardInfo>
                            </StyledCard>
                        </Col>
                        {/* </div> */}
                        {/* <div className="col-lg-3 col-sm-6 col-xs-6 col-se"> */}
                        <Col xs={6} lg={3} className='col-se'>
                            <StyledCard>
                                <StyledImgContainer>
                                    <StyledImg style={{backgroundImage: `url(${ImgPv[1].src})`} } />
                                </StyledImgContainer>
                                <StyledCardTitle>咖啡廳網站</StyledCardTitle>
                                <StyledCardInfo>
                                    咖啡廳的官方網站，包含商家的企業精神、商品列表、聯絡方式等資訊
                                </StyledCardInfo>
                            </StyledCard>
                        </Col>
                        {/* </div> */}
                    </Row>
                    <StyledProjectsBtns>
                        <Link to={'/projects'}>
                            <StyledMoreProjectsBtn>More Projects</StyledMoreProjectsBtn>
                        </Link>
                    </StyledProjectsBtns>
                </Container>
        </StyledExp>
    )
}

export default Exp