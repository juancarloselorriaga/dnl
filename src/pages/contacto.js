import React from "react"

import Layout from "../components/layout/layout.component"
import Hero from "../components/hero/hero.component"
import HeroTitle from '../components/hero-title/hero-title.component'
import Subscribe from '../components/subscribe/subscribe.component'
import Contacto from '../components/contacto/contacto.component'
import Direccion from '../components/direccion/direccion.component'
import SEO from "../components/SEO/SEO.component"

export default () => {
  return (
    <Layout>
      <SEO title="Contacto"/>
      <Hero centered>
        <HeroTitle smaller centered title="Con DNL tus negocios crecerán aún más: Generando una sinergia de negocios con un enfoque digital."/>
      </Hero>
      <Contacto />
      <Direccion />
      <Subscribe />
    </Layout>
  )
}
