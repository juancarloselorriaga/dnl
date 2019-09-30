import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const Center = ({ children, className, background, arched }) => {
  return (
    <div className={className}>
      <div
        className={
          arched
            ? "arched"
            : !background
            ? "center-backgroundless"
            : "center-background"
        }
      >
        {children}
      </div>
    </div>
  )
}

export default styled(Center)`
  padding: 1.3rem;
  background: ${props =>
      props.white ? "var(--mainWhite)" : "var(--offWhite)"};

  .center-background {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    box-shadow: var(--smoothSmallShadow);
    border-radius: 11px;
    background: var(--mainWhite);
    text-align: ${props => props.center && "center"};
  }

  .center-backgroundless {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => (props.column ? "column" : "row")};
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    

    text-align: ${props => props.center && "center"};
  }
  .arched {
    margin-top: auto;
    background: var(--offWhite);
    background: ${props =>
      props.white ? "var(--mainWhite)" : "var(--offWhite)"};
  }
  .arched .left {
    text-align: left;
    width: 100%;
  }

  ${breakpoint("desktop")`
    padding: 1.3rem 4.5rem;
  `}
`
