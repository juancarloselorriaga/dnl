import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ children, className, img }) => {
  return (
    <section className={className}>
      {img ? (
        <BackgroundImage className="background-image" fluid={img.fluid}>
          <div className="children">{children}</div>
        </BackgroundImage>
      ) : (
        <div className="children">{children}</div>
      )}
    </section>
  )
}

export default styled(Hero)`
  width: 100%;
  min-height: calc(100vh - 80px);
  background-position: top;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: ${props => (props.home ? "flex-start" : "center")};
  align-items: ${props => (props.home ? "flex-start" : "center")};
  .children {
    width: 100vw;
    margin-top: 80px;
    min-height: calc(100vh - 80px);
    padding: ${props =>
      props.extraBottom
        ? "0rem 1.3rem 8rem 1.3rem"
        : "0rem 1.3rem 4rem 1.3rem"};
    display: flex;
    flex-direction: column;
    justify-content: ${props => (props.centered ? "center" : "flex-start")};
    align-items: ${props => (props.centered ? "center" : "flex-start")};
  }
  .background-image {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    opacity: 1 !important;
  }
`
