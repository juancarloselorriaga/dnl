import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../../title/title.component"
import SectionDescription from "../../section-description/section-description.component"
import Seccion from "../../seccion/seccion.component"
import Center from "../../center/center.component"
import Servicio from "../../servicio/servicio.component"


const getAreas = graphql`
  query {
    areas: allContentfulAreas {
      edges {
        node {
          id: contentful_id
          title
          slug
          resumen {
            resumen
          }
          img: imagen {
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
      <Title title="Una solución completa a tus necesidades" />
      <SectionDescription
        textFirst="Next level food truck messenger chartreuse. Snackwave gentrify vinyl cold-pressed vaporware cornelia."
        textSecond="Franzen meditation echo park jianbing, banjo chambray narwhal XOXO bushwick flexitarian."
      />
      <Center background>
        {areas.map(({ node }) => {
          return (
            <Servicio
              key={node.id}
              title={node.title}
              text={node.resumen.resumen}
            >
            <Img fixed={node.img.fixed} />
            </Servicio>
          )
        })}
      </Center>
    </Seccion>
  )
}

export default Areas
