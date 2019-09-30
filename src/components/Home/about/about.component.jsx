import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Center from "../../center/center.component"
import Seccion from "../../seccion/seccion.component"
import ArchedImage from "../../arched-image/arched-image.component"
import styles from "./about.module.css"

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
      <Center white arched>
        <div className={styles.aboutWrapper}>
          <div className={styles.imageWrapper}>
            <ArchedImage img={about.childImageSharp.fluid} />
          </div>
          <article className={styles.aboutInfo}>
            <h4>el marketing digital está aquí</h4>
            <p className="left">
              Hexagon salvia austin godard succulents tattooed celiac bushwick
              raclette poutine snackwave enamel pin. Leggings prism artisan,
              fixie marfa lomo butcher paleo authentic
            </p>
            <p className="left">
              Ethical synth next level post-ironic cliche. Pok pok poke fashion
              axe, palo santo narwhal cronut food truck. DIY you probably
              haven't heard of them salvia, jianbing pitchfork brooklyn kinfolk
              cray raw denim echo park kogi kale chips ethical.
            </p>
          </article>
        </div>
      </Center>
    </Seccion>
  )
}

export default About
