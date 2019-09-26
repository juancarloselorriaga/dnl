import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import Layout from "../../components/layout/layout.component"
import Seccion from "../../components/seccion/seccion.component"
import Center from "../../components/center/center.component"
import Hero from "../../components/hero/hero.component"

const AreaTemplate = ({ data, className }) => {
  const { title, resumen, backgroundImage, logo } = data.area

  return (
    <Layout>
      <Hero extraBottom img={backgroundImage} className={className}>
        <div className="hero-content">
          <h4>{title}</h4>
          <span>{resumen.resumen}</span>
        </div>
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
