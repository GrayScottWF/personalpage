import styled from "styled-components";
import { 
    primaryColor,
    paraColor,
    darkerGreen,
    primaryBgColor,
    secondaryBgColor,
 } from "../GuideLine";

export const StyledMaskDark = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

export const StyledExp = styled.div`
  min-height: calc(100vh - 160px);
  color: ${primaryColor};
  .col {
    border-right: 2px solid ${darkerGreen};
  }
  @media (max-width: 500px) {
  .col-se {
    flex: 0 0 auto;
    width: 100%;
  }
}
`

export const StyledMainTitle = styled.div`
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

export const StyledTimeLine = styled.div`
  float: right;
`

export const StyledTimeDot = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${darkerGreen};
  border-radius: 50%;

  position: absolute;
  top: 0;
  right: -23px;
`

export const StyledTime = styled.div`
  display: block;
  font-size: 24px;
  font-weight: 600;
  margin-right: 20px;

  @media (max-width: 991px) {
    text-align: center;
    margin-right: 10px;

  }
  @media (max-width: 575px) {
    font-size: 24px;

    
  }
  @media (max-width: 400px) {
    font-size: 20px;
    margin-right: 8px;

  }
`

export const StyledExpJob = styled.div`
  display: block;
  font-size: 16px;
  margin-right: 20px;
  line-height: 24px;
  text-align: right;


  @media (max-width: 991px) {
    text-align: center;
    margin-right: 10px;

  }
  @media (max-width: 575px) {
    margin-right: 8px;
    font-size: 16px;
  }
`

export const StyledExpSubtitle = styled.div`
  display: block;
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 8px;

  @media (max-width: 575px) {
    font-size: 20px;
  }
`

export const StyledExpPara = styled.div`
  display: block;
  font-size: 16px;
  margin-left: 20px;
  line-height: 24px;
  margin-bottom: 40px;
  color: ${paraColor};

  @media (max-width: 575px) {
    font-size: 14px;
  }
`

export const StyledCard = styled.div`
  color: ${primaryColor};
  padding: 8px;
  background-color: ${primaryBgColor};
  border: 2px solid ${secondaryBgColor};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(49, 49, 49, 0.3);
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;

  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 576px) {
    margin: 16px;
    margin-bottom: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const StyledImgContainer = styled.div`
  width: 100%;

  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 75%;
  }
`

export const StyledImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`

export const StyledCardTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  margin-top: 8px;

  margin-bottom: 8px;
`

export const StyledCardInfo = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: rgb(192, 187, 187);
  height: 74px;
  overflow: hidden;
  margin-bottom: 12px;
`

export const StyledProjectsBtns = styled.div`
  display: flex;
  justify-content: space-around;
`

export const StyledMoreProjectsBtn = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding: 8px 20px;
  background-color: ${primaryBgColor};
  color: ${primaryColor};
  border: 2px solid ${secondaryBgColor};
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(49, 49, 49, 0.3);
  transition: all 0.2s;

  &:hover {
    box-shadow:
      0 7px 14px rgba(50, 50, 93, 0.1),
      0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
    background-color: ${primaryColor};
    color: ${primaryBgColor};
  }
`

export const Styled = styled.div`

`

