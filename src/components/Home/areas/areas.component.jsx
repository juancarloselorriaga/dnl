import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../../title/title.component"
import SectionDescription from "../../section-description/section-description.component"
import Seccion from "../../seccion/seccion.component"
import Center from "../../center/center.component"
import Servicio from "../../servicio/servicio.component"

import styles from "./areas.module.css"

const getImages = graphql`
  query Image {
    legal: file(relativePath: { eq: "legal.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    web: file(relativePath: { eq: "webIcon.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    synergy: file(relativePath: { eq: "synergyIcon.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

const Areas = () => {
  const { legal, web, synergy } = useStaticQuery(getImages)

  return (
    <Seccion offWhite>
      <Title title="Una solución completa a tus necesidades" />
      <SectionDescription
        textFirst="Next level food truck messenger chartreuse. Snackwave gentrify vinyl cold-pressed vaporware cornelia."
        textSecond="Franzen meditation echo park jianbing, banjo chambray narwhal XOXO bushwick flexitarian."
      />
      <Center background>
        <div className={styles.center}>
          <Servicio
            title="DNL Legal"
            text="Dreamcatcher intelligentsia roof party woke shaman, green juice la croix kogi selvage."
          >
            <Img fixed={legal.childImageSharp.fixed} />
          </Servicio>
          <Servicio
            title="DNL Web"
            text="ianbing cloud bread cardigan taxidermy poke, eytar copper mug truffaut live-edge"
          >
            <Img fixed={web.childImageSharp.fixed} />
          </Servicio>
          <Servicio
            title="DNL Synergy"
            text="Synth tbh copper mug gentrify. Tattooed occupy meggings yuccie snackwave meh pinterest seitan. "
          >
            <Img fixed={synergy.childImageSharp.fixed} />
          </Servicio>
        </div>
      </Center>
    </Seccion>
  )
}

export default Areas
