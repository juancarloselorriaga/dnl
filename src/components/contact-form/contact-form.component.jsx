import React, { useState } from "react"
import styled from "styled-components"

import Boton from "../boton/boton.component"
import Decision from "../decision/decision.component"

const ContactForm = ({ className }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxUpdate = () => {
    setIsChecked(isChecked => !isChecked)
  }

  return (
    <div className={className}>
      <form
        action="https://formspree.io/juancarlos@jjaas.mx"
        method="POST"
        className="form"
      >
        <div>
          <label htmlFor="name">nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="juan pérez"
          />
          <label htmlFor="email">correo</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="email@dnl.mx"
          />
          <label htmlFor="message">mensaje</label>
          <textarea
            name="message"
            id="message"
            rows="10"
            className="form-control"
            placeholder="¿En qué te ayudamos?"
          />
        </div>
        <Decision
          light
          isChecked={isChecked}
          handleCheckboxUpdate={handleCheckboxUpdate}
          label="Me quiero suscribir al newsletter mensual de DNL."
        />
        <div className="button-wrapper">
          <Boton title="Enviar" className="submit" />
        </div>
      </form>
    </div>
  )
}

export default styled(ContactForm)`
  .form {
    width: 100%;
  }
  label {
    text-transform: capitalize;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: 300;
    text-align: left;
  }
  .form-control {
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    border: 1px solid var(--darkGrey);
    border-radius: 0.25rem;
    font-family: "Nunito", sans-serif;
  }

  input {
    margin-bottom: 1rem;
  }

  text-area {
    margin-bottom: 0px;
  }

  .submit {
    width: 50%;
    cursor: pointer;
  }
  .button-wrapper {
    text-align: center;
  }
`
