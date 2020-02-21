import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../../title/title.component"
import SectionDescription from "../../section-description/section-description.component"
import Seccion from "../../seccion/seccion.component"
import Center from "../../center/center.component"
import Servicio from "../../servicio/servicio.component"
import Container from "../../container/container.component"

const getAreas = graphql`
  query {
    areas: allContentfulAreas {
      edges {
        node {
          id: contentful_id
          title
          slug
          img: logo {
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Areas = () => {
  const response = useStaticQuery(getAreas)
  const areas = response.areas.edges

  return (
    <Seccion offWhite>
      <Container offWhite padding>
        <Center offWhite>
          <Title title="Intégrate al mejor equipo para el crecimiento de tu negocio o servicio." />
          <SectionDescription text="Contamos con tres áreas especializadas para cubrir tus necesidades de manera integral en un solo click." />
          <SectionDescription text="'“Es en los problemas donde se esconden las oportunidades” — Albert Einstein'" />
          {areas.map(({ node }) => {
            return (
              <Servicio key={node.id} title={node.title} slug={node.slug}>
                <Img fixed={node.img.fixed} />
              </Servicio>
            )
          })}
        </Center>
      </Container>
    </Seccion>
  )
}

export default Areas
