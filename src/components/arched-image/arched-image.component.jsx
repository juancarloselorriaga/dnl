import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ArchedImage = ({ className, img }) => {
  return (
    <article className={className}>
      <div className="img-container">
        <Img
          fluid={img}
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
