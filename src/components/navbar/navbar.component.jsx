import React, { useState, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Logo from "../../assets/logoSimpleWhite.svg"
import LogoColors from "../../assets/logoColors.svg"
import links from "../../constants/links/links.constant"
import socialIcons from "../../constants/social-icons/social-icons.constant.js"
import RoundButton from "../round-button/round-button.component"

import styles from "./navbar.module.css"

import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const [isOnTop, setOnTop] = useState(true)

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 50 ? setOnTop(false) : setOnTop(true)
    }
  }, [])

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav
      className={`${styles.navbar} ${styles.sticky}`}
      style={
        isOnTop && !isOpen
          ? { background: "transparent" }
          : isOpen
          ? { background: "white" }
          : {
              background: "white",
              borderBottom: "1px rgb(35,55,72, 0.20) solid",
            }
      }
    >
      <div className={styles.navCenter}>
        <div className={`${styles.navHeader}`}>
          <AniLink fade to="/">
            {isOnTop && !isOpen ? (
              <img src={Logo} alt="dnl logo" />
            ) : (
              <img src={LogoColors} alt="dnl logo" />
            )}
          </AniLink>

          <RoundButton nav onClick={toggleNav} aria-label="menu">
            <FaBars />
          </RoundButton>
        </div>
        <div
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          <ul>
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <AniLink key={index} fade to={item.path}>
                    {item.text}
                  </AniLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
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
