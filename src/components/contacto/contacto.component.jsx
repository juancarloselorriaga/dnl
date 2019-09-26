import React from "react"
import styled from "styled-components"

import Seccion from "../seccion/seccion.component"
import Center from "../center/center.component"
import ContactForm from "../contact-form/contact-form.component"
import ArchedImage from "../../components/arched-image/arched-image.component"

const Contacto = ({ className }) => {
  return (
    <div className={className}>
      <Seccion white arched>
        <Center white arched>
          <ArchedImage contactImage />
          <ContactForm />
        </Center>
      </Seccion>
    </div>
  )
}

export default styled(Contacto)``
