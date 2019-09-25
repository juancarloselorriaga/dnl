import React, { useState } from "react"
import styled from "styled-components"
import Checkbox from "react-simple-checkbox"

import InputButton from "../input-button/input-button.component"

const Subscribe = ({ className }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [emailField, setEmailField] = useState("")

  const handleSend = () => {
    console.log(`Suscribiendo a ${emailField}`)
  }

  const handleInputChange = e => {
    setEmailField(e.target.value)
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
          <div className="check-box-wrapper">
            <div className="check-box">
              <Checkbox
                color="#16b186"
                size="2"
                checked={isChecked}
                onChange={() => setIsChecked(isChecked => !isChecked)}
              />
            </div>
            <div className="label-wrapper">
              <label>Me quiero suscribir al newsletter mensual de DNL.</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default styled(Subscribe)`
  background: var(--mainBlack);
  padding: 4rem 1.3rem;

  .title-wrapper h2,
  .subscribe h2 {
    text-transform: capitalize;
    color: var(--mainWhite);
    font-size: 1.8rem;
  }

  .check-box-wrapper {
    color: var(--mainWhite);
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .label-wrapper {
    margin-left: 1rem;
  }

  .check-box-wrapper label {
    font-size: 0.7rem;
    font-weight: 300;
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
