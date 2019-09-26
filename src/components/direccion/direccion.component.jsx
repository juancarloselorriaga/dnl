import React from "react"
import styled from "styled-components"

import Seccion from "../seccion/seccion.component"
import Center from "../center/center.component"

import { FaMapMarkerAlt } from "react-icons/fa"

const Direccion = ({ className }) => {
  return (
    <div className={className}>
      <Seccion offWhite>
        <Center className='direccion' offWhite center>
          <h4>Dirección</h4>
          <span>Perif. Blvd. Manuel Ávila Camacho 36, Lomas - Virreyes</span>
          <div className="link">
            <a href="/">
              <FaMapMarkerAlt />
              <span>Nuestra oficina en Google Maps</span>
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
  
}
.link{
  font-size: 1rem;
}
.link span {
    font-size: 1rem;
    font-weight: 300;
    margin-left: 0.5rem;
    display: inline-block;
  }

  .link a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 2rem;
    color: #16b186;
  }`
