import styled from "styled-components";
import { 
    primaryColor,
    paraColor,
    darkerGreen,
    primaryBgColor,
    secondaryBgColor,
    tagColor,
 } from "../GuideLine";


export const StyledMaskDark = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

export const StyledProjects = styled.div`
  min-height: calc(100vh - 160px);
  padding-bottom: 40px;

  @media (max-width: 500px) {
    .col-se {
      flex: 0 0 auto;
      width: 100%;
    }
  }
`
export const StyledTitle = styled.div`
  color: ${primaryColor};
  text-align: center;
  font-size: 40px;
  padding-top: 20px;
  margin-bottom: 20px;
`

export const StyledVS = styled.div`
  display: block;
  width: 100%;
  height: 3px;
  background-color: ${darkerGreen};
  margin-bottom: 20px;
`

export const StyledCard = styled.a`
  display: block;
  text-align: center;
  color: ${primaryColor};
  padding: 16px;
  /* min-height: 400px; */
  height: 100%;
  margin-bottom: 20px;

  border: 4px solid ${secondaryBgColor};
  background-color: ${primaryBgColor};
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(15, 16, 26, 0.8);

  user-select: none;
  cursor: pointer;

  transition: all 0.2s;

  @media screen and (max-width: 576px) {
    padding: 16px 32px;
    max-width: 350px;
    margin: 0 auto;
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const StyledProjectName = styled.div`
  font-size: 32px;
  line-height: 40px;
  font-weight: 600;
  margin-bottom: 12px;
  color: limegreen;

  @media screen and (max-width: 991px) {
    font-size: 28px;
  }
`

export const StyledProjectPara = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${paraColor};

  max-height: 144px;

  overflow:hidden;

  @media screen and (max-width: 991px) {
    font-size: 14px;
  }
`

export const Styled = styled.div`

`





// Tags

export const StyledLgTag = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;

  padding-bottom:12px;
`

/* html */
export const StyledTagHtml = styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: green;
  color: ${tagColor};
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;
  white-space: nowrap;


  &:before{
    content: 'HTML';
  }
`

/* css */
export const StyledTagCss = styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: #4d8fbf;
  color: ${tagColor};
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;
  white-space: nowrap;
  
  &:before{
    content: 'CSS';
  }
`

/* JavaScript */
export const StyledTagJs = styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: chocolate;
  color: ${tagColor};
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;
  white-space: nowrap;
  
  &:before{
    content: 'JavaScript';
  }
`

/* TypeScript */
export const StyledTagTs = styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: blue;
  color: ${tagColor};
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;
  white-space: nowrap;
  
  &:before{
    content: 'TypeScript';
  }
`

/* Vue */
export const StyledTagVue = styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: rgba(88, 156, 88, 1);
  color: ${tagColor};
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;
  white-space: nowrap;
  
  &:before{
    content: 'Vue.js';
  }
`

export const StyledTagReact = styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: rgba(95, 104, 109, 1);
  color: ${tagColor};
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;
  white-space: nowrap;
  
  &:before{
    content: 'React';
  }
`

