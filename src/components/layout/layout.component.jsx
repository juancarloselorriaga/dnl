import React from "react"

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
      <RoundButton floating big>
        <FaComments size='1.5rem'/>
      </RoundButton>
    </main>
  )
}

export default Layout
