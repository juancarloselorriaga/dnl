import React from "react"
import styled from "styled-components"

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
  
  .center-background {
        /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 89vw;
    margin: 0 auto;
    padding: 1.3rem;
    box-shadow: var(--smoothSmallShadow);
    border-radius: 11px;
    background: var(--mainWhite);
    text-align: ${props => props.center && 'center'};
  }
  
  .center-backgroundless {
    padding: 1.3rem;
    margin: 0 auto;
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    background: ${props =>
      props.white ? "var(--mainWhite)" : "var(--offWhite)"};

      text-align: ${props => props.center && 'center'};
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
    width: 100%;
  }
`
