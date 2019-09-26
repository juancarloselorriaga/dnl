import React, { Fragment } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ children, className, img }) => {
  return (
    <section className={className}>
      {img ? (
        <BackgroundImage
          className={className}
          fluid={img}
        >
          {children}
        </BackgroundImage>
      ) : (
        <Fragment>{ children }</Fragment>
      )}
    </section>
  )
}

export default styled(Hero)`
  min-height: ${props => (props.home ? "calc(100vh - 80px)" : "50vh")};
  background: ${props => props.home && "#233748"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: ${props => (props.home ? "flex-start" : "center")};

  align-items: ${props => (props.home ? "flex-start" : "center")};
  margin-top: 80px;
  padding: 0rem 1.3rem 4rem 1.3rem;
`
