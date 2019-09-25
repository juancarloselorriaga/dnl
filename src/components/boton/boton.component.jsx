import React from "react"
import styled from "styled-components"

const Boton = ({ className, title }) => {
  return <button className={className}>{title}</button>
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
  border: 2px solid #16b186;
  border-radius: 100px;
  &:hover {
    background: transparent;
    color: #16b186;
  }
`
