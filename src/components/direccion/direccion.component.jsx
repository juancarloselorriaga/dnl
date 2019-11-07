import React from "react"
import styled from "styled-components"

import Seccion from "../seccion/seccion.component"
import Center from "../center/center.component"

import { FaMapMarkerAlt, FaPhone } from "react-icons/fa"

const Direccion = ({ className }) => {
  return (
    <div className={className}>
      <Seccion offWhite>
        <Center className='direccion' offWhite center column>
          <h4>Dirección</h4>
          <span>Perif. Blvd. Manuel Ávila Camacho 36, Lomas - Virreyes</span>
          <div className="link">
            <a target='blank' href="https://www.google.com/maps/place/Torre+Esmeralda+II/@19.4291218,-99.2053275,15z/data=!4m2!3m1!1s0x0:0x149bda154a37d02a?sa=X&ved=2ahUKEwjXyYaBivDkAhUORa0KHY_SC80Q_BIwC3oECAwQCw">
              <FaMapMarkerAlt />
              <span>Nuestra oficina en Google Maps</span>
            </a>
          </div>
          <div className="link">
            <a target='blank' href="tel:55-9171-2105">
              <FaPhone />
              <span>55-9171-2105    |    55-9172-1612</span>
            </a>
          </div>
        </Center>
      </Seccion>
    </div>
  )
}

export default styled(Direccion)`
.direccion h4 {
  font-size: 1.5rem;
}
.direccion span {
  font-size: 0.9rem;
  min-width: 20rem
}
.link{
  font-size: 1rem;;
}
.link span {
    font-size: 1rem;
    font-weight: 300;
    margin-left: 0.5rem;
    display: inline-block;
    text-align: left;
    margin-left: 2rem;
  }

  .link a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 2rem 1rem 1rem;
    color: #16b186;
  }`
