import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Boton = ({ className, title, to, submit }) => {
  return (
    <div>
      {submit ? (
        <input type="submit" value={title} className={className} />
      ) : to ? (
        <AniLink fade to={to}>
          <button aria-label={title} className={className}>{title}</button>
        </AniLink>
      ) : (
        <button aria-label={title} className={className}>{title}</button>
      )}
    </div>
  )
}

export default styled(Boton)`
  padding: 0.9rem 1.6rem;
  text-transform: capitalize;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  background: #16b186;
  color: #fff;
  display: inline-block;
  transition: all 0.3s linear;
  cursor: pointer;
  border: ${props => props.contrast ? '2px solid white' : '2px solid #16b186'};
  border-radius: 100px;
  &:hover {
    background: transparent;
    color: #16b186;
  }
`
