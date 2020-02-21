import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import Seccion from "../seccion/seccion.component"
import Container from "../container/container.component"
import Center from "../center/center.component"

import { FaMapMarkerAlt, FaPhone } from "react-icons/fa"

const Direccion = ({ className }) => {
  return (
    <div className={className}>
      <Seccion offWhite>
        <Container padding>
          <Center offWhite center>
            <div className="direccion">
              <h4>Dirección</h4>
              <span>
                Perif. Blvd. Manuel Ávila Camacho 36, Lomas - Virreyes
              </span>
              <div className="link-wrapper">
                <div className="link">
                  <a
                    target="blank"
                    href="https://www.google.com/maps/place/Torre+Esmeralda+II/@19.4291218,-99.2053275,15z/data=!4m2!3m1!1s0x0:0x149bda154a37d02a?sa=X&ved=2ahUKEwjXyYaBivDkAhUORa0KHY_SC80Q_BIwC3oECAwQCw"
                  >
                    <FaMapMarkerAlt className="icon" />
                    <span>Nuestra oficina en Google Maps</span>
                  </a>
                </div>
                <div className="link">
                  <a target="blank" href="tel:55-9171-2105">
                    <FaPhone className="icon" />
                    <span>55-9171-2105 | 55-9172-1612</span>
                  </a>
                </div>
              </div>
            </div>
          </Center>
        </Container>
      </Seccion>
    </div>
  )
}

export default styled(Direccion)`
  .direccion h4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
  .direccion span {
    font-size: 1rem;
  }

  .link-wrapper {
    margin-top: 1rem;
  }

  .link {
    font-size: 1rem;
  }

  .link a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0;
    color: #16b186;
  }

  .link span {
    font-size: 0.8rem;
    font-weight: 300;
    display: inline-block;
    text-align: center;
    flex-shrink: 1;
    flex-grow: 0;
  }

  .link .icon {
    margin-right: 1rem;
  }

  ${breakpoint("tablet")`
    .direccion span {
      font-size: 1.3rem;
    }

    .link span, .link a {
      font-size: 1.2rem;
    }

    .link-wrapper {
    margin-top: 2rem;
    }
  `}

  ${breakpoint("desktop")`
  `}
`
