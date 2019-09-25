import React from "react"

import Layout from "../components/layout/layout.component"
import Hero from "../components/hero/hero.component"
import HeroContent from '../components/Home/hero-content/hero-content.component'
import About from '../components/Home/about/about.component'
import Areas from '../components/Home/areas/areas.component'
import Servicios from '../components/Home/servicios/servicios.component'
import BlogPosts from '../components/blog-posts/blog-posts.component'
import Subscribe from '../components/subscribe/subscribe.component'

export default () => {
  return (
    <Layout>
      <Hero home="true">
        <HeroContent />
      </Hero>
      <About />
      <Areas />
      <Servicios />
      <BlogPosts />
      <Subscribe />
    </Layout>
  )
}
