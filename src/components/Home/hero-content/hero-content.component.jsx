import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import Particles from "react-particles-js"

import Boton from "../../boton/boton.component"
import HeroTitle from "../../hero-title/hero-title.component"

const HeroContent = ({ className }) => {
  return (
    <div className={className}>
      <div className="title-wrapper">
        <HeroTitle
          title="La solución integral que tu empresa necesita."
          subtitle="Tu cliente ideal está allá afuera. Nosotros lo ayudaremos a encontrarte."
        />
        <div className="button-wrapper">
          <Boton to="/contacto" title="Me interesa" className="cta" />
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
  .title-wrapper,
  .button-wrapper {
    margin: 1rem 0;
  }

  .particles-wrapper {
    margin-top: 0rem;
  }

  .cta {
    z-index: 9999;
  }

  ${breakpoint("tablet")`
  .particles-wrapper, .button-wrapper {
    margin-top: 1.5rem;
  }
  `}

  ${breakpoint("desktop")`
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
