import React from "react"
import styled from "styled-components"

import { FaLongArrowAltRight } from "react-icons/fa"

const Card = ({ className, title, img, content, textoBoton }) => {
  return (
    <article className={className}>
      <div className="card-media" background={img} />
      <div className="card-content">
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
      <div className="card-action">
        <a href="/">
          <span>{textoBoton}</span>
          <FaLongArrowAltRight />
        </a>
      </div>
    </article>
  )
}

export default styled(Card)`
  margin: 2rem 0;
  border-radius: 11px;
  box-shadow: var(--smoothSmallShadow);
  .card-media {
    background-image: ${props => `url(${props.img})`};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
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

  .card-action a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 2rem;
    color: #16b186;
  }
`
