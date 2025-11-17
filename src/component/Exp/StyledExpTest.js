import styled from "styled-components";

export const StyledExp = styled.div`
min-height: calc(100vh - 160px);
.exp {
  color: #14b14d;

  .col {
    border-right: 2px solid #14754d;
  }

  .exp-title {
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
  .exp-item {
    .exp-timeline {
      float: right;

      .time-dot {
        display: block;
        width: 20px;
        height: 20px;
        background: #14754d;
        border-radius: 50%;

        position: absolute;
        top: 0;
        right: -23px;
      }

      .exp-time {
        display: block;
        font-size: 24px;
        font-weight: 600;
        margin-right: 20px;

        @media (max-width: 575px) {
          font-size: 16px;
        }
        @media (max-width: 400px) {
          font-size: 14px;
        }
      }

      .exp-job {
        display: block;
        font-size: 16px;
        margin-right: 20px;
        line-height: 24px;
        text-align: right;

        @media (max-width: 575px) {
          font-size: 14px;
        }
      }
    }

    .exp-infos {
      .exp-subtitle {
        display: block;
        font-size: 24px;
        font-weight: 600;
        margin-left: 20px;
        margin-bottom: 8px;

        @media (max-width: 575px) {
          font-size: 20px;
        }
      }
      .exp-para {
        display: block;
        font-size: 16px;
        margin-left: 20px;
        line-height: 24px;
        margin-bottom: 40px;
        color: rgb(192, 187, 187);

        @media (max-width: 575px) {
          font-size: 14px;
        }
      }
    }
  }
}
.projects {
  .projects-title {
    text-align: center;
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #14b14d;
  }
  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #14754d;
    margin-bottom: 20px;
  }
  .card {
    color: #14b14d;
    padding: 8px;
    min-height: 400px;
    background-color: #0f101a;
    border: 2px solid #313131;
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

    .img-container {
      width: 100%;

      &:before {
        content: '';
        display: block;
        width: 100%;
        padding-top: 75%;
      }

      .image {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    }

    .card-title {
      font-size: 32px;
      font-weight: 600;
      line-height: 40px;

      margin-bottom: 8px;
    }

    .card-info {
      font-size: 20px;
      line-height: 24px;
      color: rgb(192, 187, 187);
      height: 74px;
      overflow: hidden;
    }
  }
  .projects-btns {
    display: flex;
    justify-content: space-around;

    .more-projects {
      margin-top: 16px;
      margin-bottom: 32px;
      font-size: 32px;
      font-weight: 600;
      line-height: 40px;
      padding: 8px 20px;
      background-color: #0f101a;
      color: #14b14d;
      border: 2px solid #313131;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(49, 49, 49, 0.3);
      transition: all 0.2s;

      &:hover {
        box-shadow:
          0 7px 14px rgba(50, 50, 93, 0.1),
          0 3px 6px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
        background-color: #14b14d;
        color: #0f101a;
      }
    }
  }
}

`