import React from "react"
import styled from "styled-components"

const Subtitle = ({ text, className }) => {
  return (
    <div className={className}>
      <h5>
        <span className="subtitle">{text}</span>
      </h5>
    </div>
  )
}

export default styled(Subtitle)`
  margin-bottom: 2rem;
  width: 100%;
  h5 {
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 1.1rem;
  }
  .subtitle {
    color: var(--darkGrey);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
    h5 {
      font-size: 1.5rem;
    }
  }
`
