import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import links from "../../constants/links/links.constant"
import socialIcons from "../../constants/social-icons/social-icons.constant"


import Logo from "../../assets/logoWhite.svg"

import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.links}>
          {links.map((item, index) => {
            return (
              <AniLink
                key={index}
                paintDrip
                hex="#3fd0d4"
                to={item.path}
                duration={1}
              >
                {item.text}
              </AniLink>
            )
          })}
        </div>
      <div className={styles.brand}>
        <img src={Logo} alt="backroads logo" />
        <p>Meditation hot chicken fanny pack, pickled vinyl sartorial tote bag
        wolf. Shaman organic scenester messenger bag vice, yuccie pitchfork
        ethical succulents. XOXO whatever waistcoat squid heirloom 3 wolf moon
        lomo four loko ennui ramps live-edge. Semiotics truffaut artisan
        kickstarter hot chicken viral gentrify.</p>
      </div>
      <div className={styles.icons}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      <div className={styles.copyright}>
        marca registrada &copy; desarrollo de negocios lomas{" "}
        {new Date().getFullYear()} todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
