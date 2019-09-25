import React from "react"
import styled from "styled-components"

const Seccion = ({ children, className, arched }) => {
  return (
    <div className={className}>
      <div className={arched ? "arched" : "normal"}>{children}</div>
    </div>
  )
}

export default styled(Seccion)`
  .normal {
    padding: 4rem 0;
    background: ${props =>
      props.white
        ? "var(--mainWhite)"
        : props.offWhite
        ? "var(--offWhite)"
        : ""};
    border-bottom: 0.5px var(--mainGrey) solid;
  }
  .arched {
    margin-top: auto;
    background: var(--offWhite);
    text-align: center;
    background-color: var(--mainWhite);
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
    padding-bottom: 4rem;
  }
`
