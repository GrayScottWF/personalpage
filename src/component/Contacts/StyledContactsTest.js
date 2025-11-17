import styled from "styled-components";


export const StyledContacts = styled.div`
  min-height: calc(100vh - 160px);

  @media (max-width: 575px) {
    height: 100%;
  }

  .contact {
    .contact-title {
      color: #14b14d;

      text-align: center;
      font-size: 40px;
      padding-top: 20px;
      margin-bottom: 20px;
    }
    .hor {
      display: block;
      width: 100%;
      height: 3px;
      background-color: #14754d;
      margin-bottom: 20px;
    }
    .contacts {
      .social-area {
        padding: 0 32px;
        height: 100%;

        @media screen and (max-width: 991px) {
          padding: 0;
        }
        @media screen and (max-width: 576px) {
          margin: 16px;
        }

        .contact-subtitle {
          color: #14b14d;

          text-align: center;
          font-size: 40px;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .contact-social {
          background-color: #0f101a;
          border: 2px solid #313131;
          padding: 20px;
          height: calc(100% - 86px);
          border-radius: 16px;

          .contact-social-item {
            display: block;
            width: 100%;
            font-size: 24px;
            line-height: 32px;
            color: #fff;
            background-color: #313131;
            border: 1px solid #2a2b3a;

            border-radius: 8px;

            padding-top: 8px;
            padding-bottom: 8px;
            margin-bottom: 20px;

            transition: all 0.2s;

            &:hover {
              color: #14b14d;
              transform: translateY(-4px);
            }

            .social-icon {
              color: #14b14d;
              position: absolute;
              top: 50%;
              left: 24px;
              transform: translateY(-40%);

              @media screen and (max-width: 1200px) {
                left: 12px;
              }
              @media screen and (max-width: 991px) {
                font-size: 20px;
                left: 8px;
              }
            }
            .social-name {
              padding-left: 64px;

              @media screen and (max-width: 1200px) {
                padding-left: 44px;
                font-size: 20px;
              }
              @media screen and (max-width: 991px) {
                padding-left: 36px;
                font-size: 18px;
              }
            }
          }
        }
      }
      .form-area {
        padding: 0 32px;

        @media screen and (max-width: 991px) {
          padding: 0;
        }
        @media screen and (max-width: 576px) {
          margin: 16px;
          margin-bottom: 20px;
        }
        .contact-subtitle {
          color: #14b14d;

          text-align: center;
          font-size: 40px;
          margin-top: 20px;
          margin-bottom: 20px;
          @media screen and (max-width: 576px) {
            margin-top: 40px;
          }
        }
        .send-email {
          width: 100%;
          background-color: #0f101a;
          justify-content: center;
          align-items: center;
          border-radius: 16px;
          border: 2px solid #313131;

          box-shadow: 0 4px 16px rgba(49, 49, 49, 0.3);

          .contactform {
            width: 100%;
            padding: 24px;
            color: #14b14d;

            .form-title {
              display: block;
              margin-bottom: 8px;
              font-size: 20px;
            }

            .form-item {
              background-color: #313131;
              border: 1px solid #2a2b3a;
              border-radius: 6px;
              padding: 10px;
              color: #eaeaea;
              font-size: 16px;
              width: 100%;
              outline: none;
            }

            .form-para {
              margin-top: 20px;
            }

            .form-message {
              resize: none;
            }

            .form-btn {
              display: block;
              // width: 120px;
              margin-top: 32px;
              margin-bottom: 20px;
              padding: 4px 24px;

              font-size: 32px;
              background-color: #0f101a;
              color: #14b14d;
              border: 2px solid #14b14d;
              border-radius: 8px;
              left: 50%;
              transform: translateX(-50%);
              cursor: pointer;
              transition: 0.3s;

              @media screen and (max-width: 576px) {
                font-size: 24px;
                line-height: 28px;
              }

              &:hover {
                background-color: #14b14d;
                border: 2px solid #14b14d;
                color: #0f101a;
              }
            }
          }
        }
      }
    }
  }


`