import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import breakpoint from 'styled-components-breakpoint';

import Layout from "../../components/layout/layout.component"
import Hero from "../../components/hero/hero.component"
import HeroTitle from "../../components/hero-title/hero-title.component"
import Boton from "../../components/boton/boton.component"
import Subscribe from "../../components/subscribe/subscribe.component"
import Seccion from "../../components/seccion/seccion.component"
import Center from "../../components/center/center.component"
import ArchedImage from "../../components/arched-image/arched-image.component"
import Title from "../../components/title/title.component"
import SectionDescription from "../../components/section-description/section-description.component"
import Areas from "../../components/Home/areas/areas.component"
import SEO from "../../components/SEO/SEO.component"

const AreaTemplate = ({ data, className }) => {
  const {
    title,
    resumen,
    backgroundImage,
    logo,
    subtitulo,
    contenidoSubtitulo,
  } = data.area

  return (
    <Layout>
    <SEO title={title} />
      <Hero centered extraBottom img={backgroundImage} className={className}>
        <HeroTitle centered smaller title={title} subtitle={resumen.resumen} />
        <Boton className="boton" title="¡Contáctanos!" />
      </Hero>
      <Seccion white arched className={className}>
        <Center white arched>
          <div className="area-wrapper">
            <div className="image-wrapper">
              <ArchedImage img={logo.fluid} />
            </div>
            <article className="area-info">
              <Title title={subtitulo} />
              <SectionDescription
              noExtraPadding
                text={contenidoSubtitulo.contenidoSubtitulo}
              />
            </article>
          </div>
        </Center>
      </Seccion>
      <Areas />
      <Subscribe />
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
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      subtitulo
      contenidoSubtitulo {
        contenidoSubtitulo
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
  .boton {
    margin-top: 1.5rem;
  }

  ${breakpoint('desktop')`
  .area-wrapper {
    display: flex;
  }

  .image-wrapper, .area-info {
    width: 100%;
  }
  `}
`
