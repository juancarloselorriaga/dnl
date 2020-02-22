import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Title from "../../components/title/title.component"
import SectionDescription from "../../components/section-description/section-description.component"
import Seccion from "../../components/seccion/seccion.component"
import Center from "../../components/center/center.component"
import Container from "../../components/container/container.component"

const getWebBusinessServices = graphql`
  query {
    services: allContentfulWebBusinessServices {
      edges {
        node {
          id
          titulo
          slug
          icono {
            fixed(width: 28, height: 28) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          content {
            json
          }
        }
      }
    }
  }
`

const WebBusinessServices = ({ className }) => {
  const response = useStaticQuery(getWebBusinessServices)
  const services = response.services.edges

  return (
    <Center>
      <Container padding>
        <Center>
          <Title title="Áreas de especialidad" />
          <SectionDescription text="Con nuestra experiencia digital, te ayudamos en ésta nueva era de los negocios." />
          <div className={className}>
            {services.map(({ node }) => {
              return (
                <div key={node.id} className="service-card">
                  <Img fixed={node.icono.fixed} />
                  <h5>{node.titulo}</h5>
                  <article>
                    {documentToReactComponents(node.content.json)}
                  </article>
                </div>
              )
            })}
          </div>
        </Center>
      </Container>
    </Center>
  )
}

export default styled(WebBusinessServices)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .service-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem;
  }

  .service-card h5 {
    margin: 1rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }

  .service-card article {
    margin-top: 2rem;
    font-size: 0.8rem;
    font-weight: 300;
    text-align: left;
  }

  article,
  article ul {
    width: 100%;
  }
`
