import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
// import { navigate } from "gatsby"

import HubspotForm from "react-hubspot-form"

const ContactForm = ({ className }) => {
  return (
    <div className={className}>
      <HubspotForm
        portalId="6339111"
        formId="b36e39bb-3971-4d22-9b96-1a774d8dbde9"
        onFormSubmit={() => console.log("submits")}
        onReady={form => console.log("ready")}
        loading={<div className="hub-text">Cargando...</div>}
      />
    </div>
  )
}

export default styled(ContactForm)`
  display: flex;
  justify-content: center;
  .form {
    width: 100%;
  }
  .form-wrapper label {
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

  .hub-text {
    font-size: 1.3rem;
    color: var(--primaryColor);
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

  ${breakpoint("tablet")`
  .form {
    width: 75%;
  }
  `}

  ${breakpoint("desktop")`
  .form {
    width: 60%;
  }
  `}
`
