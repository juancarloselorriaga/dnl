import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

import Layout from "../components/layout/layout.component"
import Hero from "../components/hero/hero.component"
import HeroTitle from "../components/hero-title/hero-title.component"
import Subscribe from "../components/subscribe/subscribe.component"
import Seccion from "../components/seccion/seccion.component"
import Container from "../components/container/container.component"
import Center from "../components/center/center.component"
import SEO from "../components/SEO/SEO.component"

const getAviso = graphql`
  query {
    aviso: allContentfulGeneralSettings {
      edges {
        node {
          id: contentful_id
          avisoDePrivacidad {
            json
          }
        }
      }
    }
  }
`

const AvisoDePrivacidad = ({ className }) => {
  const response = useStaticQuery(getAviso)
  const aviso = response.aviso.edges

  return (
    <Layout>
      <SEO title="Aviso de privacidad" />
      <div className={className}>
        <Hero centered>
          <HeroTitle smaller centered title="Aviso de privacidad" />
        </Hero>
        <Seccion arched centered white>
          <Container padding>
            <Center arched centered white>
              {aviso.map(({ node }) => {
                const jsonContent = node.avisoDePrivacidad.json
                return (
                  <article className="post" key={node.id}>
                    {documentToReactComponents(jsonContent)}
                  </article>
                )
              })}
            </Center>
          </Container>
        </Seccion>
        <Subscribe />
      </div>
    </Layout>
  )
}

export default styled(AvisoDePrivacidad)`
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
