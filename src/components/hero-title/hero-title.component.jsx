import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const HeroTitle = ({ title, className, subtitle, centered, smaller }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {subtitle && <span className="title">{subtitle}</span>}
    </div>
  )
}

export default styled(HeroTitle)`
  display: block;
  margin-top: 1.5rem;
  text-align: ${props => props.centered && "center"};
  color: white;
  h1,
  span {
    letter-spacing: 0.12rem;
  }
  h1 {
    font-size: ${props => (props.smaller ? "1rem" : "1.5rem")};
    font-weight: ${props => (props.smaller ? "500" : "600")};
  }
  span {
    font-size: ${props => (props.smaller ? "0.8rem" : "1.3rem")};
    font-weight: 300;
    text-align: ${props => props.centered && "center"};
  }
  div {
    margin-top: 1.5rem;
  }
  ${breakpoint("tablet")`
    h1 {
      font-size: ${props => (props.smaller ? "1.5rem" : "2rem")};
    }
    span {
      font-size: ${props => (props.smaller ? "1rem" : "1.5rem")};
    }
  `}

  ${breakpoint("desktop")`
    h1 {
      font-size: ${props => (props.smaller ? "1.8rem" : "2.2rem")};
    }
    span {
      font-size: ${props => (props.smaller ? "1.1rem" : "1.4rem")};
    }
  `}
`
