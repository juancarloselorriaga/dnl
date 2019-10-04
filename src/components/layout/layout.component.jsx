import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Navbar from "../navbar/navbar.component"
import Footer from "../footer/footer.component"
import RoundButton from "../round-button/round-button.component"

import { FaComments } from "react-icons/fa"

import "./layout.global-styles.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <AniLink fade to='/contacto'>
        <RoundButton floating big aria-label="contacto">
          <FaComments size="1.5rem" />
        </RoundButton>
      </AniLink>
    </main>
  )
}

export default Layout