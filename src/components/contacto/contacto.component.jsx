import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Seccion from "../seccion/seccion.component"
import Center from "../center/center.component"
import ContactForm from "../contact-form/contact-form.component"
import ArchedImage from "../../components/arched-image/arched-image.component"

const getContactoImage = graphql`
  query {
    contacto: file(relativePath: { eq: "dnl-circle.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Contacto = ({ className }) => {
  const { contacto } = useStaticQuery(getContactoImage)
  return (
    <div className={className}>
      <Seccion white arched>
        <Center white arched>
          <ArchedImage img={contacto.childImageSharp.fluid} />
          <ContactForm />
        </Center>
      </Seccion>
    </div>
  )
}

export default styled(Contacto)``
