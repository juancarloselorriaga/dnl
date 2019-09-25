import React from "react"
import styled from "styled-components"

const Contacto = ({ className }) => {
  return <div className={className}>
  
  </div>
}

export default styled(Contacto)`
  background: var(--offWhite);
  padding: 4rem 0;
  border-bottom: 0.5px var(--mainGrey) solid;
  .center {
  width: 89vw;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  box-shadow: var(--smoothSmallShadow);
  border-radius: 11px;
  background: var(--mainWhite);
}
`
