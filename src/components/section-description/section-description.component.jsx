import React from "react"
import styled from "styled-components"

const SectionDescription = ({ textFirst, textSecond, className }) => {
  return (
    <div className={className}>
        <p className="text">{textFirst} <br /> {textSecond} </p>
    </div>
  )
}

export default styled(SectionDescription)`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 2 rem;
  padding: 0 1.3rem;
  p {
    text-align: center;
    letter-spacing: 0.5px; 
    line-height: 200%;
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
`
