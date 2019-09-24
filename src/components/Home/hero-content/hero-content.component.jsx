import React from "react"
import styled from "styled-components"
import Particles from "react-particles-js"

import Boton from "../../boton/boton.component"

const HeroContent = ({ className }) => {
  return (
    <div className={className}>
      <h1>El apoyo en marketing que necesitas hoy.</h1>
      <span>
        El método de DNL es único y te posicionamos increíblemente rápido.
      </span>
      <div>
        <Boton title="¡Conócenos!" />
      </div>
      <div>
        <Particles params={{
          "retina_detect": true
        }} />
              
      </div>
    </div>
  )
}

export default styled(HeroContent)`
  color: white;
  h1,
  span {
    letter-spacing: 0.12rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  span {
    font-size: 1.9rem;
    font-weight: 300;
  }
  div {
    margin-top: 1.5rem;
  }
`
