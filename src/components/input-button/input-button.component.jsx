import React from "react"
import styled from "styled-components"
import Boton from "../boton/boton.component"

const InputButton = ({ className, handleSend, onChange }) => {
  return (
    <div className={className}>
      <input
        type="email"
        name="email"
        id="email"
        className="form-control"
        placeholder="tu-email@dnl.mx"
        onChange={onChange}
      />

      <div className="button" onClick={handleSend}>
        <Boton submit title="Suscribirse" />
      </div>
      <label htmlFor="email">Suscribirse</label>
    </div>
  )
}

export default styled(InputButton)`
  display: flex;
  align-items: stretch;
  margin-top: 2rem;
  border-radius: 11px;
  .form-control {
    width: 80%;
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    border: none;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .button {
    width: 20%;
    background-color: var(--primaryColor);
    color: var(--mainWhite);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`
