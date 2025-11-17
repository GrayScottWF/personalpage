import styled from "styled-components";
import MyImg from '../images/Artist.jpg'


export const StyledHome = styled.div`
min-height: calc(100vh - 160px);
padding-top: 40px;
color: #c2803e;

@media (max-width: 575px) {
height: 100%;
padding-top: 0px;
}
  .home {
    .main-info {
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
        padding-left: 20px;
        padding-right: 20px;
      }

      .card {
        background-color: #cccbd6;
        color: #17ad6a;
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
        }
        .img-container {
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
          .picture {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: absolute;
            top: 0;
            right: 0;
            background-image: url(${MyImg});
          }
        }
        .card-info {
          text-align: center;
        }
        .name-ch {
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
        }
        .name-en {
          font-size: 24px;
          margin-bottom: 12px;
          font-weight: 600;


          @media (max-width: 768px) {
            font-size: 18px;
            margin-bottom: 18px;
          }
        }
        span {
          display: block;
          left: 50%;
          transform: translate(-50%);
          width: 120px;
          height: 2px;
          border-bottom: 3px solid #fefefe;
          margin-bottom: 12px;
        }
        .pro {
          margin-bottom: 40px;
          font-weight: 600;


          @media (max-width: 768px) {
            margin-bottom: 20px;
          }
        }
      }
      .home-info {
        background-color: #0f101a;
        margin-left: -12px;
        padding-left: 16px;
        width: 400px;
        height: 100%;
        padding-top: 20px;

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
          margin-top: 20px;
          margin-left: 0;
          border-radius: 16px;
          text-align: center;
          border-left: 2px solid #313131;
          height: 340px;
        }

        .info-1 {
          margin-bottom: 12px;
          @media (max-width: 575px) {
            padding-top: 8px;
          }
        }
        .info-title {
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
        }
        span {
          display: block;
          position: absolute;
          width: 240px;
          height: 2px;
          background-color: #17ad6a;
          margin-bottom: 4px;

          @media (max-width: 768px) {
            width: 180px;
          }
          @media (max-width: 575px) {
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .info-paras {
          font-size: 24px;
          line-height: 32px;
          margin-top: 24px;

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
            font-size: 20px;
            .info-para {
              list-style: none;
            }
          }
        }
        @media (max-width: 575px) {
          .info-2 {
            padding-bottom: 12px;
          }
        }
      }
    }
  }

`