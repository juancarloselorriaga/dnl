import React from "react"
import styled from "styled-components"

const SectionDescription = ({ text, className, noExtraPadding }) => {
  return (
    <div className={className}>
        <p className="text">{text}</p>
    </div>
  )
}

export default styled(SectionDescription)`
  font-size: 1rem;
  font-weight: 300;
  margin: 2 rem;
  padding: 0 1.3rem;
  p {
    text-align: center;
    letter-spacing: 0.5px; 
    line-height: 200%;
    margin: 2rem 0;

  }
  .text {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }

  @media (min-width: 992px) {
    padding: ${props => props.noExtraPadding ? '0' : '0 4.5rem'}
  }
`
