import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import Particles from "react-particles-js"

import Boton from "../../boton/boton.component"
import HeroTitle from "../../hero-title/hero-title.component"

const HeroContent = ({ className }) => {
  return (
    <div className={className}>
      <div className='title-wrapper'>
        <HeroTitle
          title="La solución integral que tu empresa necesita."
          subtitle="Tu cliente ideal está allá fuera. Nosotros lo ayudaremos a encontrarte."
        />
        <div className="button-wrapper">
          <Boton to="/contacto" title="Me interesa" />
        </div>
      </div>
      <div className="particles-wrapper">
        <Particles
          params={{
            retina_detect: true,
          }}
        />
      </div>
    </div>
  )
}

export default styled(HeroContent)`
  .particles-wrapper,
  .button-wrapper {
    margin-top: 1rem;
  }

  ${breakpoint("tablet")`
  .particles-wrapper, .button-wrapper {
    margin-top: 1rem;
  }
  `}

  ${breakpoint('desktop')`
    display: flex;
    justify-content: space-between;

    .title-wrapper {
      width: 45%;
      max-height: 300px;
    }

    .particles-wrapper {
      width: 45%;
    }
  `}
`
