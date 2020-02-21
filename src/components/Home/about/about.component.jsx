import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Center from "../../center/center.component"
import Seccion from "../../seccion/seccion.component"
import ArchedImage from "../../arched-image/arched-image.component"
import styles from "./about.module.css"
import Container from "../../container/container.component"

const getAboutImage = graphql`
  query {
    about: file(relativePath: { eq: "bulb.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { about } = useStaticQuery(getAboutImage)
  return (
    <Seccion white arched>
      <Container padding>
        <Center white arched>
          <div className={styles.aboutWrapper}>
            <div className={styles.imageWrapper}>
              <ArchedImage img={about.childImageSharp.fluid} />
            </div>
            <article className={styles.aboutInfo}>
              <h4>
                ¿Conoces las causas que limitan el crecimiento de tu empresa?
              </h4>
              <p className="left">
                DNL te ayuda a identificar, analizar, reconocer y canalizar tus
                necesidades.
              </p>
              <p className="left">
                En sinergia con tu empresa, encontramos y desarrollamos una
                solución a la medida para su crecimiento y posicionamiento.
              </p>
            </article>
          </div>
        </Center>
      </Container>
    </Seccion>
  )
}

export default About
