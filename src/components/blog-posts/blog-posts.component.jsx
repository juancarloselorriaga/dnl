import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Title from "../title/title.component"
import Card from "../card/card.component"
import Boton from "../boton/boton.component"
import Seccion from "../seccion/seccion.component"
import Center from "../center/center.component"
import Container from "../container/container.component"

const getBlogPosts = graphql`
  query {
    blogPosts: allContentfulPosts(
      filter: { mostrarEnPrincipal: { eq: true } }
    ) {
      edges {
        node {
          id: contentful_id
          title
          slug
          publicado
          autor
          resumen {
            resumen
          }
          img: imagen {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogPosts = ({ className }) => {
  const response = useStaticQuery(getBlogPosts)
  const blogPosts = response.blogPosts.edges
  return (
    <Seccion offWhite className={className}>
      <Container offWhite padding>
        <Center offWhite>
          <Title title="Noticias, tendencias y blog." />
          {blogPosts.map(({ node }) => {
            return (
              <Card
                key={node.id}
                content={node.resumen.resumen}
                items={node}
                textoBoton="Leer artículo"
              />
            )
          })}
        </Center>
        <div className="button-wrapper">
          <Boton to="/blog" title="Leer más artículos" />
        </div>
      </Container>
    </Seccion>
  )
}

export default styled(BlogPosts)`
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
    width: 100%;
  }
`
