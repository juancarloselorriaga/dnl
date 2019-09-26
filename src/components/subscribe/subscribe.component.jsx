import React, { useState } from "react"
import styled from "styled-components"

import InputButton from "../input-button/input-button.component"
import Decision from "../decision/decision.component"

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
        <h2>conectate hoy mismo con el mundo digital con DNL</h2>
      </div>
      <div className="subscribe">
        <h2>mantente al tanto</h2>
        <span>
          Obtén nuestro newsletter mensual con tips para crecer tu negocio.
        </span>
        <form>
          <InputButton
            handleSend={handleSend}
            onChange={handleInputChange}
          ></InputButton>
          <Decision isChecked={isChecked} handleCheckboxUpdate={handleCheckboxUpdate} label="Me quiero suscribir al newsletter mensual de DNL."/>
        </form>
      </div>
    </div>
  )
}

export default styled(Subscribe)`
  background: var(--mainBlack);
  padding: ${props => !props.noBottom ? "8rem 1.3rem" : "4rem 1.3rem"};

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
`
