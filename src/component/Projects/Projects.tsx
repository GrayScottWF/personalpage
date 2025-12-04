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
    StyledTagReact,

} from './StyledProjects'
import { Row, Col, Container } from 'react-bootstrap';
import projectData from "../Project/project.json"


type lgName = 'Html' | 'Css' | 'Js' | 'Ts' | 'Vue' | 'React';

const tagMap = {
    Html: <StyledTagHtml />,
    Css: <StyledTagCss />,
    Js: <StyledTagJs />,
    Ts: <StyledTagTs />,
    Vue: <StyledTagVue />,
    React: <StyledTagReact />
};

interface ProjectData {
    id: number;
    name: string;
    para: string;
    lg: lgName[];
    url: string;
}

const data: ProjectData[] = projectData as ProjectData[]; 


function Projects() {

    return(
        <StyledProjects>
            <StyledMaskDark />

                    <Container>
                        <StyledTitle>作品集</StyledTitle>
                        <StyledVS />
                        <Row>
                            {data.map(project => (
                                <Col lg={3} md={4} sm={6} className="col-se mb-4" key={project.id}>
                                    <StyledCard href={project.url}>
                                        <StyledProjectName>{project.name}</StyledProjectName>
                                        <StyledProjectPara>{project.para}</StyledProjectPara>

                                        <StyledLgTag>
                                            {project.lg.map((lgName, index) => (
                                                <React.Fragment key={index}>
                                                    {tagMap[lgName]}
                                                </React.Fragment>
                                            ))}
                                        </StyledLgTag>
                                    </StyledCard>
                                </Col>
                            ))}

                        </Row>
                    </Container>

        </StyledProjects>
    )
}

export default Projects