import styled from "styled-components"
import { 
    primaryColor,
 } from "../GuideLine";

export const StyledNavBar = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(173deg, rgba(75, 64, 222, 1) 33%, rgba(195, 149, 207, 1) 66%);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledNav = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: ${primaryColor};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  user-select: none;
`

export const StyledNavNames = styled.div`
  margin-top: 12px;
  color: ${primaryColor};
  font-weight: 800;
`

export const StyledNameCh = styled.span`
  font-size: 32px;
`

export const StyledNameEn = styled.div`

`
export const StyledNavItems = styled.ul`
  @media screen and (max-width: 768px) {
    padding: 0;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 500;

    display: flex;
    flex-direction: column;
    justify-content: center;

    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }

  &.active{
    opacity: 1;
    visibility: visible;
  }
`
export const StyledNavItem = styled.li`
  display: inline-block;
  vertical-align: top;
  padding-left: 20px;
  color: #14754d;
  right: 0;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 32px;
  }
`

export const StyledNavLink = styled.div`
  transition: all 0.2s;
  color: #000;
  font-size: 22px;
  line-height: 46px;
  font-weight: 550;

  &:hover {
    color: #14754d;
  }

  @media screen and (max-width: 768px) {
    color: #14754d;
    font-size: 32px;
    padding: 16px 32px;
  }
`

export const StyledNavToggle = styled.div`
    width: 48px;
    height: 48px;
    float: right;
    /* margin-top: 8px; */
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
`

export const Styled = styled.div`

`

