import React from 'react';
import {
    StyledMaskDark,
    StyledHomePage,
    StyledMainInfo,
    StyledCard,
    StyledImgContainer,
    StyledPicture,
    StyledCardInfo,
    StyledNameCh,
    StyledNameEn,
    StyledVS,
    StyledPro,
    StyledHomeInfo,
    StyledInfo1,
    StyledInfoTitle,
    StyledInfoVS,
    StyledInfoParas,
    StyledInfo2,
} from './StyledHome'
import { Row, Col, Container } from 'react-bootstrap';
import projectData from "../Project/project.json"
interface ProjectData {
    name: string;
}

const data: ProjectData[] = projectData.slice(0,4) as ProjectData[]; 
function Home() {
    return(
        <StyledHomePage>
            <StyledMaskDark />
            <Container>
                <StyledMainInfo>
                    <Row>
                        <Col xs={12} sm={6} className='namecard'>
                            <StyledCard>
                                <StyledImgContainer>
                                    <StyledPicture />
                                </StyledImgContainer>
                                <StyledCardInfo>
                                    <StyledNameCh>張佐圻</StyledNameCh>
                                    <StyledNameEn>Gray Soctt</StyledNameEn>
                                    <StyledVS />
                                    <StyledPro>Front-End Engineer</StyledPro>
                                </StyledCardInfo>                   
                            </StyledCard>
                        </Col>
                        <Col xs={12} sm={6} >
                            <StyledHomeInfo>
                                <StyledInfo1>
                                    <StyledInfoTitle>近期完成專案</StyledInfoTitle>
                                    <StyledInfoVS />
                                    <StyledInfoParas>
                                        {data.map(project => (
                                             <li className="info-para">{project.name}</li>
                                        ))}
                                        {/* <li className="info-para">個人網站</li>
                                        <li className="info-para">企業Guideline</li>
                                        <li className="info-para">咖啡廳官方網站</li> */}
                                    </StyledInfoParas>
                                </StyledInfo1>
                                <StyledInfo2>
                                    <StyledInfoTitle>擅長工具</StyledInfoTitle>
                                    <StyledInfoVS />
                                    <StyledInfoParas>
                                        <li className="info-para">Vue</li>
                                        <li className="info-para">React</li>
                                        <li className="info-para">Html</li>
                                        <li className="info-para">Jquery</li>
                                    </StyledInfoParas>
                                </StyledInfo2>
                            </StyledHomeInfo>
                        </Col>
                    </Row>
                </StyledMainInfo>
            </Container>

        </StyledHomePage>
    )
}

export default Home