import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getArchedImages = graphql`
  query {
    about: file(relativePath: { eq: "marketingTarget.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    contact: file(relativePath: { eq: "dnl-circle.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ArchedImage = ({ className, contactImage, aboutImage }) => {
  const { contact, about } = useStaticQuery(getArchedImages)

  return (
    <article className={className}>
      <div className="img-container">
        <Img
          fluid={
            contactImage
              ? contact.childImageSharp.fluid
              : aboutImage
              ? about.childImageSharp.fluid
              : ""
          }
        />
      </div>
    </article>
  )
}

export default styled(ArchedImage)`
  margin: 1rem 0;
  position: relative;
  img {
    width: 100%;
    display: block;
    border-radius: 100%;
  }

  .img-container {
    padding: 2rem;
  }
`

//<img src={img} alt={alt} />
