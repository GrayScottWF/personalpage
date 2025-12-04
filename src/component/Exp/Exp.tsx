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
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectData from '../Project/project.json'
interface ProjectData {
    id: number;
    name: string;
    para: string;
    url: string;
    img: string;
}
const data: ProjectData[] = projectData.slice(0,4) as ProjectData[]; 
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
                            <StyledExpSubtitle>無</StyledExpSubtitle>
                            <StyledExpPara>
                                目前正在學習中，目標是成為全端工程師
                            </StyledExpPara>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} sm={4} md={3} className='col'>
                            <StyledTimeLine>
                                <StyledTimeDot />
                                <StyledTime>2022 - 2025</StyledTime>
                                <StyledExpJob>司機</StyledExpJob>
                            </StyledTimeLine>
                        </Col>
                        <Col xs={8} sm={8} md={9}>
                            <StyledExpSubtitle>全便利有限公司</StyledExpSubtitle>
                            <StyledExpPara>
                                負責整理貨物，安排當日流程、配送物品至指定地點、登記物品配送紀錄、到指定地點收取貨物、維繫舊有客戶、開發陌生客戶
                            </StyledExpPara>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} sm={4} md={3} className='col'>
                            <StyledTimeLine>
                                <StyledTimeDot />
                                <StyledTime>2020 - 2022</StyledTime>
                                <StyledExpJob>餐廳廚助</StyledExpJob>
                            </StyledTimeLine>
                        </Col>
                        <Col xs={8} sm={8} md={9}>
                            <StyledExpSubtitle>西堤</StyledExpSubtitle>
                            <StyledExpPara>
                                冷盤/甜點製作、預估每日所需食材及備料、與外場人員溝通協調出餐
                            </StyledExpPara>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <StyledMainTitle>近期專案</StyledMainTitle>
                    <StyledVS />
                    <Row>
                        {data.map(project => (
                            <Col xs={6} lg={3} className='col-se'>
                                <StyledCard href={project.url}>
                                    <StyledImgContainer>
                                        <StyledImg style={{backgroundImage: `url(${project.img})`} } />
                                    </StyledImgContainer>
                                    <StyledCardTitle>{project.name}</StyledCardTitle>
                                    <StyledCardInfo>
                                        {project.para}
                                    </StyledCardInfo>
                                </StyledCard>
                            </Col>
                        ))}
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