import styled from "styled-components";

export const StyledProjects = styled.div`
min-height: calc(100vh - 160px);
.projects {
    padding-bottom: 40px;

  .projects-title {
    color: #14b14d;

    text-align: center;
    font-size: 40px;
    padding-top: 20px;
    margin-bottom: 20px;
  }
  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #14754d;
    margin-bottom: 20px;
  }
  .card {
    display: block;
    text-align: center;
    color: #14b14d;
    padding: 16px;
    min-height: 400px;
    margin-bottom: 20px;

    border: 4px solid #313131;
    background-color: #0f101a;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(15, 16, 26, 0.8);

    user-select: none;
    cursor: pointer;

    transition: all 0.2s;

    @media screen and (max-width: 576px) {
      margin: 16px;
    }

    &:hover {
      transform: scale(1.05);
    }

    .project-name {
      font-size: 32px;
      line-height: 40px;
      font-weight: 600;
      margin-bottom: 12px;
      color: limegreen;

      @media screen and (max-width: 991px) {
        font-size: 28px;
      }
    }
    .project-para {
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
      margin-bottom: 12px;
      color: rgb(192, 187, 187);

      @media screen and (max-width: 991px) {
        font-size: 14px;
      }
    }
    .lgtag {
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
      .tag {
        display: inline-block;
        vertical-align: top;
        white-space: nowrap;
      }
    }
  }
}
`

export const StyledLgtag = styled.div`
/* html */
.tag-html {
  display: inline-block;
  vertical-align: top;
  background-color: green;
  color: #fff;
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;

  &:before{
    content: 'HTML';
  }
}


/* css */
.tag-css {
  display: inline-block;
  vertical-align: top;
  background-color: skyblue;
  color: #fff;
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;
  
  &:before{
    content: 'CSS';
  }
}


/* JavaScript */
.tag-js {
  display: inline-block;
  vertical-align: top;
  background-color: chocolate;
  color: #fff;
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;
  
  &:before{
    content: 'JavaScript';
  }
}


/* TypeScript */
.tag-ts {
  display: inline-block;
  vertical-align: top;
  background-color: blue;
  color: #fff;
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;
  
  &:before{
    content: 'TypeScript';
  }
}


/* Vue */
.tag-vue {
  display: inline-block;
  vertical-align: top;
  background-color: rgb(111, 202, 111);
  color: #fff;
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 4px;
  
  &:before{
    content: 'Vue.js';
  }
}


`