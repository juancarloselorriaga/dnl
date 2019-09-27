import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout/layout.component"
import Hero from "../components/hero/hero.component"
import HeroTitle from "../components/hero-title/hero-title.component"
import Subscribe from "../components/subscribe/subscribe.component"
import Seccion from "../components/seccion/seccion.component"
import Center from "../components/center/center.component"
import Card from "../components/card/card.component"
import Title from "../components/title/title.component"

const getBlogPosts = graphql`
  query {
    blogImage: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    blogPosts: allContentfulPosts {
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
          ...GatsbyContentfulFluid_tracedSVG
        }
        }
      }
    }
  }
  }
`

const AreaTemplate = ({ className }) => {
  const response = useStaticQuery(getBlogPosts)
  const blogPosts = response.blogPosts.edges
  const blogImage = response.blogImage

  return (
    <Layout>
      <Hero centered extraBottom img={blogImage.childImageSharp} className={className}>
        <HeroTitle
          centered
          smaller
          title="Noticias y anuncios"
          subtitle="Encuentra todo lo referente a marketing digital en un solo lugar"
        />
      </Hero>
      <Seccion white arched>
        <Center white>
            <Title title="Nuestro blog" />
            {blogPosts.map(({ node }) => {
              return (
                <Card
                  key={node.id}
                  content={node.resumen.resumen}
                  items={node}
                  textoBoton="Ver post"
                />
              )
            })}
        </Center>
      </Seccion>
      <Subscribe />
    </Layout>
  )
}

export default styled(AreaTemplate)`
  .boton {
    margin-top: 1.5rem;
  }
`
