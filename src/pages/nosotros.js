import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout/layout.component"
import Hero from "../components/hero/hero.component"
import HeroTitle from "../components/hero-title/hero-title.component"
import Subscribe from "../components/subscribe/subscribe.component"
import Seccion from "../components/seccion/seccion.component"
import Center from "../components/center/center.component"
import BioCard from "../components/bio-card/bio-card.component"
import Title from "../components/title/title.component"
import SEO from "../components/SEO/SEO.component"

const getUs = graphql`
  query {
    usImage: file(relativePath: { eq: "nosotros.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team: allContentfulEquipoDnl(sort: { fields: orden, order: ASC }) {
      edges {
        node {
          id
          nombre
          puesto
          bio {
            bio
          }
          foto {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Nosotros = ({ className }) => {
  const response = useStaticQuery(getUs)
  const team = response.team.edges
  const usImage = response.usImage

  return (
    <Layout>
      <SEO title="Equipo DNL" />
      <Hero centered extraBottom img={usImage.childImageSharp}>
        <HeroTitle
          centered
          smaller
          title="Nosotros"
          subtitle="Te presentamos a nuestro equipo, siempre a tu disposición."
        />
      </Hero>
      <Seccion white arched>
        <Center white>
          <Title title="Equipo DNL" />
          <div className={className}>
            {team.map(({ node }) => {
              return <BioCard key={node.id} items={node} />
            })}
          </div>
        </Center>
      </Seccion>
      <Subscribe />
    </Layout>
  )
}

export default styled(Nosotros)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
