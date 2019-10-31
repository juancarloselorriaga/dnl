import React from "react"
import styled from "styled-components"

import Seccion from "../seccion/seccion.component"
import Center from "../center/center.component"
import ContactForm from "../contact-form/contact-form.component"
import Title from "../title/title.component"

const Contacto = ({ className }) => {
  return (
    <div className={className}>
      <Seccion white arched>
        <Center white arched>
          <Title title="Escríbenos y nos pondremos en contacto para ofrecerte información sobre la solución que necesitas." />
          <ContactForm />
        </Center>
      </Seccion>
    </div>
  )
}

export default styled(Contacto)``
