import styled from "styled-components";
import bg from '../images/bg/bg000.jpg'


export const StyledMaskDark = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`


export const StyledBg = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: fixed;
    background-size: cover;
    * {
    box-sizing: border-box;
    position: relative;
    }

    html,
    body {
    font-family: 'Noto Sans TC', Arial, Helvetica, sans-serif;
    }

    a {
    text-decoration: none;
    color: #000;
    }

    ul,
    li {
    /* list-style: none; */
    margin: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }

    .mask-dark {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    }

    @media (max-width: 575px) {
    .col-xs-4 {
        flex: 0 0 auto;
        width: 33.333333%;
    }
    .col-xs-6 {
        flex: 0 0 auto;
        width: 50%;
    }
    .col-xs-8 {
        flex: 0 0 auto;
        width: 66.666667%;
    }
    .col-xs-12 {
        flex: 0 0 auto;
        width: 100%;
    }
    /* .col-se {
        flex: 0 0 auto;
        width: 100%;
    } */
    }
    @media (max-width: 400px) {
    .col-se {
        flex: 0 0 auto;
        width: 100%;
    }
    }

`