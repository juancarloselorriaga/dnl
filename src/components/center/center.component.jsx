import React from "react"
import styled from "styled-components"

const Center = ({ children, className, background, arched }) => {
  return (
    <div className={className}>
      <div
        className={arched ? "arched" : !background ? "center-backgroundless" : "center-background"}
      >
        {children}
      </div>
    </div>
  )
}

export default styled(Center)`
  .center-background {
    width: 89vw;
    margin: 0 auto;
    padding: 1.3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    box-shadow: var(--smoothSmallShadow);
    border-radius: 11px;
    background: var(--mainWhite);
  }
  .center-backgroundless {
    padding: 1.3rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    border-radius: 11px;
    background: var(--offWhite);
  }
  .arched {
    margin-top: auto;
    background: var(--offWhite);
    padding: 1.3rem;
    background-color: var(--mainWhite);
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
  }
  .arched .left {
    text-align: left;
  }
`
