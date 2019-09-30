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
  margin-bottom: 2 rem;
  padding: 0 1.3rem;
  width: 100%;
  h5 {
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 1.5rem
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
  }
`
