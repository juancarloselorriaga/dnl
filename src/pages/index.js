import React from "react"

import Layout from "../components/layout/layout.component"
import Hero from "../components/hero/hero.component"
import HeroContent from '../components/Home/hero-content/hero-content.component'

export default () => {
  return (
    <Layout>
      <Hero home="true">
        <HeroContent />
      </Hero>
    </Layout>
  )
}
