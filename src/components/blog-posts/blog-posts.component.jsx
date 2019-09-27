import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Title from "../title/title.component"
import Card from "../card/card.component"
import Boton from "../boton/boton.component"
import Seccion from "../seccion/seccion.component"
import Center from "../center/center.component"

const getBlogPosts = graphql`
  query {
  blogPosts: allContentfulPosts{
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

const BlogPosts = ({ className }) => {
  const response = useStaticQuery(getBlogPosts)
  const blogPosts = response.blogPosts.edges
  return (
    <Seccion offWhite className={className}>
      <Title title="Noticias, anuncios y blog." />
      <Center>
        {blogPosts.map(({ node }) => {
          return <Card key={node.id} content={node.content.content} items={node} textoBoton="Ver post" />
        })}
      </Center>
      <div className="button-wrapper">
        <Boton title="ver todos los posts" />
      </div>
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
