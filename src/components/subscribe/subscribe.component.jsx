import React, { useState } from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import InputButton from "../input-button/input-button.component"
import Decision from "../decision/decision.component"
import Boton from "../boton/boton.component"

const Subscribe = ({ className }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [emailField, setEmailField] = useState("")

  const handleSend = () => {
    console.log(`Suscribiendo a ${emailField}`)
  }

  const handleInputChange = e => {
    setEmailField(e.target.value)
  }

  const handleCheckboxUpdate = () => {
    setIsChecked(isChecked => !isChecked)
  }

  return (
    <div className={className}>
      <div className="title-wrapper">
        <h2>
          ¿Cómo conectar hoy mismo con el mundo digital para crecer tu negocio?
        </h2>
        <Boton className="boton" title="¡Dímelo!" to="/contacto" />
      </div>
      <div className="subscribe">
        <h2>Suscríbete y entérate de lo último en negocios.</h2>
        <span>
          Recibe nuestro newsletter mensual con tips para crecer tu negocio.
        </span>
        <form>
          <InputButton
            handleSend={handleSend}
            onChange={handleInputChange}
          ></InputButton>
          <Decision
            isChecked={isChecked}
            handleCheckboxUpdate={handleCheckboxUpdate}
            label="Quiero suscribirme al newsletter mensual de DNL."
          />
        </form>
      </div>
    </div>
  )
}

export default styled(Subscribe)`
  background: var(--mainBlack);
  padding: ${props => (!props.noBottom ? "8rem 1.3rem" : "4rem 1.3rem")};

  .title-wrapper h2,
  .subscribe h2 {
    text-transform: capitalize;
    color: var(--mainWhite);
    font-size: 1.8rem;
  }

  .subscribe span {
    color: var(--mainWhite);
    font-size: 0.9rem;
    font-weight: 300;
  }

  .title-wrapper {
    margin-bottom: 4rem;
  }

  ${breakpoint("tablet")`
    .subscribe {
      width: 50%;
    }
  `}

  ${breakpoint("tablet")`
  padding: ${props => (!props.noBottom ? "8rem 4.5rem" : "4rem 4.5rem")};
  `}
`
