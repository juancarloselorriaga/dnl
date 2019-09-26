import React from "react"

import Layout from "../components/layout/layout.component"
import Hero from "../components/hero/hero.component"
import HeroTitle from '../components/hero-title/hero-title.component'
import Subscribe from '../components/subscribe/subscribe.component'
import Contacto from '../components/contacto/contacto.component'
import Direccion from '../components/direccion/direccion.component'

export default () => {
  return (
    <Layout>
      <Hero>
        <HeroTitle title="Ya trabajamos con varias marcas, nos encantaría ayudarte a ti."/>
      </Hero>
      <Contacto />
      <Direccion />
      <Subscribe />
    </Layout>
  )
}
