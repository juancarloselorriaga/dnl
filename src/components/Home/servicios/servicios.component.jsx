import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "../../title/title.component"
import Card from "../../card/card.component"
import Seccion from "../../seccion/seccion.component"
import Center from "../../center/center.component"

const getServicios = graphql`
  query {
    servicios: allContentfulServicios {
      edges {
        node {
          id: contentful_id
          title
          slug
          content {
            content
          }
          img: imagen {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Servicios = () => {
  const response = useStaticQuery(getServicios)
  const servicios = response.servicios.edges
  return (
    <Seccion offWhite>
      <Title title="Inbound. Asesoría. Te ayudamos." />
      <Center>
        {servicios.map(({ node }) => {
          return (
            <Card
              key={node.id}
              items={node}
              textoBoton="Leer más"
            />
          )
        })}
      </Center>
    </Seccion>
  )
}

export default Servicios
