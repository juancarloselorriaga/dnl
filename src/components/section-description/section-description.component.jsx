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
  margin: 0.5rem 0;
  p {
    text-align: left;
    letter-spacing: 0.5px;
    line-height: 125%;
  }
  .text {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    font-size: 1.3rem;
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }

  @media (min-width: 992px) {
    padding: ${props => (props.noExtraPadding ? "0" : "0 4.5rem")};
  }
`
