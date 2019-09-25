import React from "react"
import styled from "styled-components"

const HeroTitle = ({ title, className, subtitle }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {subtitle && <span className="title">{subtitle}</span>}
    </div>
  )
}

export default styled(HeroTitle)`
margin-top: 1.5rem;
color: white;
  h1,
  span {
    letter-spacing: 0.12rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  span {
    font-size: 1.9rem;
    font-weight: 300;
  }
  div {
    margin-top: 1.5rem;
  }

`
