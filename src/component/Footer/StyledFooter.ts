import styled from "styled-components"

export const StyledFooter = styled.div`
  display: block;
  height: 60px;
  width: 100%;
  background: #4b40de;
  background: linear-gradient(357deg, rgba(75, 64, 222, 1) 33%, rgba(217, 186, 224, 1) 66%);
  color: #14754d;
  bottom: 0;
`

export const StyledFooterItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledCr = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 16px;
  margin-top: 20px;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`

export const StyledSocialBtns = styled.div`
  margin-top: 10px;
  
  @media (max-width: 450px) {
    margin-top: 12px;
  }
`

export const StyledSocialItem = styled.a`
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgb(160, 250, 213);
  color: rgb(160, 250, 213);
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50%;
  transition: all 0.3s;
  list-style: none;
  position: relative;
  margin-left: 8px;
  font-size: 24px;


  @media (max-width: 450px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }

  &:hover {
    background-color: rgb(160, 250, 213);
    /* color: #333; */

  }
  &:hover .social-btn {
    color: #333;
  }
`

export const StyledSocialBtn = styled.div`
  color: rgb(160, 250, 213);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    &:hover {
    /* background-color: rgb(160, 250, 213); */
    color: #333;

  }
`

export const Styled = styled.div`

`

