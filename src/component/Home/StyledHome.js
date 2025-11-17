import styled from "styled-components";
import MyImg from '../images/Artist.jpg'
import { 
    primaryColor,
    primaryBgColor,
    secondaryColor
 } from "../GuideLine";

export const StyledMaskDark = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

export const StyledHomePage = styled.div`
    min-height: calc(100vh - 160px);
    padding-top: 40px;

    @media (max-width: 575px) {
        height: 100%;
        padding-top: 0px;
        padding-bottom: 32px;

        .namecard{
            margin-bottom: 20px;
        }
    }
    
`

export const StyledMainInfo = styled.div`
    border-radius: 16px;
    justify-content: center;
    width: 800px;
    margin: 90px auto;
    overflow: hidden;
    border: 2px solid #313131;

    user-select: none;

    @media (max-width: 991px) {
        
        width: 100%;
        border: none;
    }
    @media (max-width: 576px) {
        margin: 0 auto;
        padding-top: 80px;
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const StyledCard = styled.div`
    background-color: #cccbd6;
    color: ${primaryColor};
    width: 400px;
    float: right;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    margin-right: -12px;

    @media (max-width: 991px) {
        width: 100%;
        height: 100%;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
        border: 2px solid #313131;
        border-right: none;
    }
    @media (max-width: 575px) {
        border-radius: 16px;
        margin-right: 0;
        border-left: 2px solid #313131;
        margin-bottom:12px

    }
`

export const StyledImgContainer = styled.div`
    width: 240px;
    height: 240px;
    display: block;
    border-radius: 50%;
    margin: 24px auto;

    overflow: hidden;

    @media (max-width: 991px) {
        width: 160px;
        height: 160px;
    }
    @media (max-width: 768px) {
        width: 140px;
        height: 140px;
    }

    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`

export const StyledPicture = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${MyImg});
`

export const StyledCardInfo = styled.div`
    text-align: center;
`

export const StyledNameCh = styled.div`
    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 4px;

    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 24px;
        margin-top: 20px;
        margin-bottom: 4px;
    }
`

export const StyledNameEn = styled.div`
    font-size: 24px;
    margin-bottom: 12px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 18px;
    }
`

export const StyledVS = styled.div`
    display: block;
    left: 50%;
    transform: translate(-50%);
    width: 120px;
    height: 2px;
    border-bottom: 3px solid #fefefe;
    margin-bottom: 12px;
`

export const StyledPro = styled.div`
    margin-bottom: 40px;
    font-weight: 600;


    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`

export const StyledHomeInfo = styled.div`
    background-color: ${primaryBgColor};
    margin-left: -12px;
    padding-left: 16px;
    width: 400px;
    height: 100%;
    padding-top: 20px;
    color: ${secondaryColor};

    @media (max-width: 991px) {
        width: 100%;
        height: 100%;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        border: 2px solid #313131;
        border-left: none;
    }
    @media (max-width: 575px) {
        padding: 0;
        padding-top: 8px;
        margin-left: 0;
        border-radius: 16px;
        text-align: center;
        border-left: 2px solid #313131;

    }
`
export const StyledInfo1 = styled.div`
        margin-bottom: 12px;
        @media (max-width: 575px) {
        padding-top: 8px;
        }
`

export const StyledInfoTitle = styled.div`
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 16px;

    @media (max-width: 991px) {
        font-size: 28px;
        line-height: 32px;
    }
    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 8px;
    }

`

export const StyledInfoVS = styled.div`
    display: block;
    position: absolute;
    width: 240px;
    height: 2px;
    background-color: ${primaryColor};
    margin-bottom: 4px;

    @media (max-width: 768px) {
        width: 180px;
    }
    @media (max-width: 575px) {
        left: 50%;
        transform: translateX(-50%);
    }

`

export const StyledInfoParas = styled.ul`
    font-size: 24px;
    line-height: 32px;
    margin-top:12px;

    li{
        &:first-child{
            padding-top: 12px;
        }
        &:last-child{
            padding-bottom:12px
        }
        
    }
        

    @media (max-width: 991px) {
        font-size: 20px;
        line-height: 28px;
    }
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
        margin-top: 16px;
    }
    @media (max-width: 575px) {
        padding: 0;
        padding-top: 8px;
        font-size: 20px;
        .info-para {
            list-style: none;
            padding-top: 4px;
            
        }
    }
`

export const StyledInfo2 = styled.div`
    @media (max-width: 575px) {
        margin-bottom: 12px;


        
    }
    

`

