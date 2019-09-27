import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BackgroundImage from "gatsby-background-image"

import { FaLongArrowAltRight } from "react-icons/fa"

const Card = ({ className, items, textoBoton, content }) => {
  const { title, img, autor, publicado, slug } = items
  return (
    <article className={className}>
      <BackgroundImage className="card-media" fluid={img.fluid} />
      <div className="card-content">
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
      <div className="publicacion">
        <span className="fecha">por</span>
        <span className="autor">{autor}</span>
        <span className="fecha">{publicado}</span>
      </div>
      <div className="card-action">
        <AniLink fade className="link" to={`/posts/${slug}`}>
        <span>{textoBoton}</span>
          <FaLongArrowAltRight />
        </AniLink>
      </div>
    </article>
  )
}

export default styled(Card)`
  margin: 2rem 0;
  border-radius: 11px;
  box-shadow: var(--smoothSmallShadow);
  .card-media,
  &:before {
    height: 150px;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    overflow: hidden;
  }

  .card-content {
    padding: 1rem;
  }

  .card-content h5 {
    margin: 0.75rem 0;
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;
  }

  .card-content p {
    font-size: 0.9rem;
    font-weight: 300;
    text-align: center;
    line-height: 175%;
  }

  .card-action span {
    padding-right: 0.5rem;
    display: inline-block;
  }

  .card-action .link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 2rem;
    color: #16b186;
  }
  .publicacion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .autor,
  .fecha {
    margin: 0.25rem;
    color: var(--darkGrey);
  }

  .autor {
    font-style: italic;
    color: var(--mainBlackText);
  }

  .fecha {
    font-size: 0.8rem;
  }
`

// <div className="card-media" background={img} />
