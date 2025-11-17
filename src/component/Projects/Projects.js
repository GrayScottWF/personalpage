import React from 'react';
import {
    StyledMaskDark,

    StyledProjects,
    StyledTitle,
    StyledVS,
    StyledCard,
    StyledProjectName,
    StyledProjectPara,

    StyledLgTag,
    StyledTagHtml,
    StyledTagCss,
    StyledTagJs,
    StyledTagTs,
    StyledTagVue,

} from './StyledProjects'
import { Row, Col, Container } from 'react-bootstrap';



function Projects() {
    return(
        <StyledProjects>
            <StyledMaskDark />

                    <Container>
                        <StyledTitle>作品集</StyledTitle>
                        <StyledVS />
                        <Row>
                            <Col lg={3} md={4} sm={6} className="col-se mb-4">
                                <StyledCard href='#!'>
                                    <StyledProjectName>個人網站</StyledProjectName>
                                    <StyledProjectPara>
                                        個人簡介網站, 包含各種個人資訊內容,Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Eligendi in possimus maiores eos sequi. Iusto nostrum veritatis
                                        iste neque quibusdam explicabo cum! Numquam recusandae totam consequuntur adipisci?
                                        Ipsa, nisi repellendus.
                                    </StyledProjectPara>
                                    <StyledLgTag>
                                        <StyledTagHtml />
                                        <StyledTagCss />
                                        <StyledTagJs />
                                        <StyledTagTs />
                                        <StyledTagVue />
                                    </StyledLgTag>
                                </StyledCard>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="col-se mb-4">
                                <StyledCard href='#!'>
                                    <StyledProjectName>咖啡廳網站</StyledProjectName>
                                    <StyledProjectPara>
                                        咖啡廳的網站介紹, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequuntur, iste nisi incidunt minus veniam, ab saepe reprehenderit recusandae
                                        quis consequatur, maiores illo enim temporibus! Cum, explicabo molestias.
                                        Laboriosam, laudantium quas?
                                    </StyledProjectPara>
                                    <StyledLgTag>
                                        <StyledTagHtml />
                                        <StyledTagCss />
                                        <StyledTagJs />
                                    </StyledLgTag>
                                </StyledCard>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="col-se mb-4">

                                <StyledCard href='#!'>
                                    <StyledProjectName>企業Guideline</StyledProjectName>
                                    <StyledProjectPara>
                                        企業的標準手冊, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequuntur, iste nisi incidunt minus veniam, ab saepe reprehenderit recusandae
                                        quis consequatur, maiores illo enim temporibus! Cum, explicabo molestias.
                                        Laboriosam, laudantium quas?
                                    </StyledProjectPara>
                                    <StyledLgTag>
                                        <StyledTagHtml />
                                        <StyledTagCss />
                                        <StyledTagJs />
                                    </StyledLgTag>
                                </StyledCard>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="col-se mb-4">
                                <StyledCard href='#!'>
                                    <StyledProjectName>個人網站</StyledProjectName>
                                    <StyledProjectPara>
                                        個人簡介網站, 包含各種個人資訊內容,Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Eligendi in possimus maiores eos sequi. Iusto nostrum veritatis
                                        iste neque quibusdam explicabo cum! Numquam recusandae totam consequuntur adipisci?
                                        Ipsa, nisi repellendus.
                                    </StyledProjectPara>
                                    <StyledLgTag>
                                        <StyledTagHtml />
                                        <StyledTagCss />
                                        <StyledTagJs />
                                        <StyledTagTs />
                                        <StyledTagVue />
                                    </StyledLgTag>
                                </StyledCard>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="col-se mb-4">
                                <StyledCard href='#!'>
                                <StyledProjectName>咖啡廳網站</StyledProjectName>
                                <StyledProjectPara>
                                    咖啡廳的網站介紹, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consequuntur, iste nisi incidunt minus veniam, ab saepe reprehenderit recusandae
                                    quis consequatur, maiores illo enim temporibus! Cum, explicabo molestias.
                                    Laboriosam, laudantium quas?
                                </StyledProjectPara>
                                    <StyledLgTag>
                                        <StyledTagHtml />
                                        <StyledTagCss />
                                        <StyledTagJs />
                                    </StyledLgTag>
                                </StyledCard>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="col-se mb-4">
                                <StyledCard href='#!'>
                                <StyledProjectName>企業Guideline</StyledProjectName>
                                <StyledProjectPara>
                                    企業的標準手冊, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consequuntur, iste nisi incidunt minus veniam, ab saepe reprehenderit recusandae
                                    quis consequatur, maiores illo enim temporibus! Cum, explicabo molestias.
                                    Laboriosam, laudantium quas?
                                </StyledProjectPara>
                                    <StyledLgTag>
                                        <StyledTagHtml />
                                        <StyledTagCss />
                                        <StyledTagJs />
                                    </StyledLgTag>
                                </StyledCard>
                            </Col>
                        </Row>
                    </Container>

        </StyledProjects>
    )
}

export default Projects