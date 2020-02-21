import React, { Fragment } from "react"
import styled from "styled-components"

const Seccion = ({ children, className, arched }) => {
  return (
    <div className={className}>
      {arched && (
        <Fragment>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="svg"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" />
          </svg>
        </Fragment>
      )}
      <div className={arched ? "arched" : "normal"}>{children}</div>
    </div>
  )
}

export default styled(Seccion)`
  position: relative;
  .normal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${props =>
      props.white
        ? "var(--mainWhite)"
        : props.offWhite
        ? "var(--offWhite)"
        : ""};
    border-bottom: 0.5px var(--mainGrey) solid;
  }
  .arched {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: var(--offWhite);
    text-align: center;
    background-color: var(--mainWhite);
    padding-bottom: ${props => props.footer && "0"};
  }
  .svg path {
    fill: ${props =>
      props.white
        ? "var(--mainWhite)"
        : props.offWhite
        ? "var(--offWhite)"
        : ""};
    stroke: ${props =>
      props.white
        ? "var(--mainWhite)"
        : props.offWhite
        ? "var(--offWhite)"
        : ""};
  }
  .svg {
    display: block;
    margin-top: -100px;
    margin-bottom: -2px;
    position: relative;
    z-index: 30;
  }
`
