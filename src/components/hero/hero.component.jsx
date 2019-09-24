import React from "react"
import styled from "styled-components"

const Hero = ({ children, className }) => {
  return <section className={className}>{children}</section>
}

export default styled(Hero)`
  min-height: ${props => (props.home ? "calc(100vh - 80px)" : "50vh")};
  background: ${props =>
    props.home
      && "#233748"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: ${props => (props.home ? "flex-start" : "center")};
  padding: 1.5rem;
  align-items: ${props => (props.home ? "flex-start" : "center")};
  margin-top: 80px;
`
