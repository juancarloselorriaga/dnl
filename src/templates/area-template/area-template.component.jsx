import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import Layout from "../../components/layout/layout.component"
import Seccion from "../../components/seccion/seccion.component"
import Center from "../../components/center/center.component"
import Hero from "../../components/hero/hero.component"
import HeroTitle from '../../components/hero-title/hero-title.component'

const AreaTemplate = ({ data, className }) => {
  const { title, resumen, backgroundImage, logo } = data.area

  return (
    <Layout>
      <Hero centered extraBottom img={backgroundImage} className={className}>
        <HeroTitle centered smaller title={title} subtitle={resumen.resumen} />
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    area: contentfulAreas(slug: { eq: $slug }) {
      title
      resumen {
        resumen
      }
      logo {
        fixed(width: 100, height: 100) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      backgroundImage {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default styled(AreaTemplate)`
  .hero-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
