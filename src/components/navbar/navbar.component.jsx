import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Logo from "../../assets/logoSimpleWhite.svg"
import links from "../../constants/links/links.constant"
import socialIcons from "../../constants/social-icons/social-icons.constant.js"
import RoundButton from '../round-button/round-button.component'

import styles from "./navbar.module.css"

import { FaAlignRight } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={Logo} alt="backroads logo" />
          <RoundButton nav onClick={toggleNav}>
            <FaAlignRight />
          </RoundButton>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                <AniLink paintDrip hex="#16b186" to={item.path} duration={1}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
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
      </div>
    </nav>
  )
}

export default Navbar
