import React from "react"
import styled from "styled-components"

const HeroTitle = ({ title, className, subtitle, centered, smaller }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {subtitle && <span className="title">{subtitle}</span>}
    </div>
  )
}

export default styled(HeroTitle)`
height: 100%;
margin-top: 1.5rem;
text-align: ${props => props.centered && 'center'};
color: white;
  h1,
  span {
    letter-spacing: 0.12rem;
  }
  h1 {
    font-size: ${props => props.smaller ? '2rem' : "2.5rem"};
    font-weight: ${props => props.smaller ? '500' : "600"};
  }
  span {
    font-size: 1.9rem;
    font-weight: 300;
    text-align: ${props => props.centered && 'center'};
  }
  div {
    margin-top: 1.5rem;
  }

`
