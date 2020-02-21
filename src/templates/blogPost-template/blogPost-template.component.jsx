import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../../components/layout/layout.component"
import Hero from "../../components/hero/hero.component"
import HeroTitle from "../../components/hero-title/hero-title.component"
import Boton from "../../components/boton/boton.component"
import Subscribe from "../../components/subscribe/subscribe.component"
import Seccion from "../../components/seccion/seccion.component"
import Container from "../../components/container/container.component"
import Center from "../../components/center/center.component"
import BlogPosts from "../../components/blog-posts/blog-posts.component"
import SEO from "../../components/SEO/SEO.component"

const BlogPostTemplate = ({ data, className }) => {
  const {
    title,
    publicado,
    autor,
    imagen,
    content: { json },
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            {node.data.target.fields && (
              <img
                width="80%"
                src={node.data.target.fields.file["en-US"].url}
                alt={title}
              />
            )}
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title} />
      <div className={className}>
        <Hero centered extraBottom img={imagen}>
          <HeroTitle centered smaller title={title} />
          <div className="publicacion">
            <span className="por">por</span>
            <span className="autor">{autor}</span>
          </div>
        </Hero>
        <Seccion white arched>
          <Container padding>
            <Center white arched>
              <div className="post-wrapper">
                <div className="publicado-el">
                  <span>Publicado el {publicado}</span>
                </div>
                <article className="post">
                  {documentToReactComponents(json, options)}
                </article>
                <Boton title="todos los posts" to="/blog" />
              </div>
            </Center>
          </Container>
        </Seccion>
        <BlogPosts />
        <Subscribe />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      publicado(formatString: "ll", locale: "es")
      autor
      content {
        json
      }
      imagen {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default styled(BlogPostTemplate)`
  .boton {
    margin-top: 1.5rem;
  }

  .publicacion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--mainWhite);
  }
  .publicacion span .por {
    color: var(--mainWhite);
  }

  .publicado-el {
    margin: 4rem 0;
  }

  .post-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .post p {
    text-align: left;
  }

  .post a {
    color: var(--primaryColor);
  }

  .post li {
    margin-left: 1rem;
  }
`
