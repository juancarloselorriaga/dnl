import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FaLongArrowAltRight } from "react-icons/fa"

const Servicio = ({ children, text, title, slug, className }) => {
  return (
    <article className={className}>
      <div className="icon-wrapper">{children}</div>
      <p>{text}</p>
      <AniLink fade className="link" to={`/areas/${slug}`}>
        <span>{title}</span>
        <FaLongArrowAltRight />
      </AniLink>
    </article>
  )
}

export default styled(Servicio)`
  margin: 2rem 0 1rem 0;
  padding-bottom: 1rem;
  text-align: center;
  border-bottom: 0.5px rgb(0, 0, 0, 0.3) solid;
  span {
    color: var(--primaryColor);
    padding: 0.5rem;
    display: inline-block;
  }

  .link {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    margin: 1rem;
    color: var(--primaryColor);
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
`
