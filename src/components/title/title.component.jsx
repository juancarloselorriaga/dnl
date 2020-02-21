import React from "react"
import styled from "styled-components"

const Title = ({ title, className }) => {
  return (
    <div className={className}>
      <h5>
        <span className="title">{title}</span>
      </h5>
    </div>
  )
}

export default styled(Title)`
  margin-bottom: 2rem;
  width: 100%;
  h5 {
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 1.3rem;
  }
  .title {
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
    h5 {
      font-size: 1.9rem;
    }
  }
`
