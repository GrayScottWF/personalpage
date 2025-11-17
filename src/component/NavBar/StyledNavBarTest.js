import styled from "styled-components"

export const StyledNavBar = styled.div`
.navbar {
  width: 100%;
  height: 100px;
  background: linear-gradient(173deg, rgba(75, 64, 222, 1) 33%, rgba(195, 149, 207, 1) 66%);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
  z-index: 500;
  display:flex;
  justify-content: center;
  align-items: center;

  .nav {
    font-size: 20px;
    line-height: 24px;
    color: #14b14d;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    /* padding-top: 16px; */
    user-select: none;

    .nav-title {
      padding-top: 16px;
      color: #14b14d;
      .name {
        font-weight: 800;
      }
      .name-ch {
        font-size: 32px;
      }
    }

    .nav-item {
      display: inline-block;
      vertical-align: top;
      padding-left: 20px;
      /* padding-top: 22px; */
      color: #14754d;
      right: 0;

      .nav-link {
        transition: all 0.2s;
        color: #000;
        font-size: 22px;
        line-height: 46px;
        font-weight: 550;

        &:hover {
          color: #14754d;
        }
      }
    }
    @media screen and (max-width: 768px) {
      .nav-items {
        position: fixed;
        left: 0;
        top: 0;
        width: 101%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 500;

        display: flex;
        flex-direction: column;
        justify-content: center;

        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
      }
      .nav-items.active {
        opacity: 1;
        visibility: visible;
        .nav-item {
          text-align: center;
          margin-bottom: 32px;

          .nav-link {
            color: #14754d;
            font-size: 32px;
            padding: 16px 32px;
          }
        }
      }
    }
  }
  .nav-toggle {
    width: 48px;
    height: 48px;
    float: right;
    margin-top: 8px;
    display: none;
    z-index: 600;

    @media screen and (max-width: 768px) {
      display: inline-block;
    }

    span {
      display: block;
      width: 32px;
      height: 2px;
      background-color: #14754d;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      transition: all 0.3s;

      &:nth-child(1) {
        top: 12px;
      }
      &:nth-child(2) {
        top: 22px;
      }
      &:nth-child(3) {
        top: 32px;
      }
    }
    &.active span {
      &:nth-child(1) {
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
}
#popup-nav {
  padding-left: 0;
}
`