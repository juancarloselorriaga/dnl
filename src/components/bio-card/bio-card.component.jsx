import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import Img from "gatsby-image"

const BioCard = ({ className, items }) => {
  const {
    nombre,
    puesto,
    bio: { bio },
    foto,
  } = items
  return (
    <article className={className}>
      <div className="card-media">
        <Img fluid={foto.fluid} />
      </div>

      <div className="card-header">
        <h5>{nombre}</h5>
        <span>{puesto}</span>
      </div>
      <div className="card-content">
        <p>{bio}</p>
      </div>
    </article>
  )
}

export default styled(BioCard)`
  margin: 2rem 0;
  border-radius: 11px;
  box-shadow: var(--smoothSmallShadow);
  width: 100%;

  .card-media,
  &:before {
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    overflow: hidden;
  }

  .card-media,
  .card-header,
  .card-content {
    padding: 1rem;
  }

  .card-media div {
    border-radius: 11px;
    box-shadow: var(--smoothSmallShadow);
  }

  .card-header h5 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .card-header span {
    font-size: 1.15rem;
    font-weight: 300;
  }

  .card-content p {
    font-weight: 300;
    font-size: 1rem;
  }

  ${breakpoint("tablet")`
  .card-media div {
    border-radius: 11px;
    box-shadow: var(--smoothSmallShadow);
  }
  `}

  ${breakpoint("desktop")`
    width: 30%;
    height: 650px;
    overflow: hidden;

    .card-media div {
      border-radius: 11px;
      box-shadow: var(--smoothSmallShadow);
  }
  `}
`
