import React from "react"
import styled from "styled-components"

import Seccion from "../seccion/seccion.component"
import Container from "../container/container.component"
import Center from "../center/center.component"
import ContactForm from "../contact-form/contact-form.component"
import Title from "../title/title.component"

const Contacto = ({ className }) => {
  return (
    <div className={className}>
      <Seccion white arched>
        <Container padding>
          <Center white arched>
            <div className="content-wrapper">
              <Title title="Escríbenos y nos pondremos en contacto para ofrecerte información sobre la solución que necesitas." />
              <ContactForm />
            </div>
          </Center>
        </Container>
      </Seccion>
    </div>
  )
}

export default styled(Contacto)`
  .content-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`
