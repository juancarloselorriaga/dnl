import React from "react"
import styled from "styled-components"

import Seccion from "../seccion/seccion.component"
import Center from "../center/center.component"
import ContactForm from "../contact-form/contact-form.component"

const Contacto = ({ className }) => {
  return (
    <div className={className}>
      <Seccion white arched>
        <Center white arched>
          <ContactForm />
        </Center>
      </Seccion>
    </div>
  )
}

export default styled(Contacto)``
