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
      window.pageYOffset > 25 ? setOnTop(false) : setOnTop(true)
    }
  }, [])

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div
          className={`${styles.navHeader} ${styles.sticky}`}
          style={
            isOnTop && !isOpen
              ? { background: "#233748" }
              : isOpen
              ? { background: "white" }
              : {
                  background: "white",
                  borderBottom: "1px rgb(35,55,72, 0.20) solid",
                }
          }
        >
          {isOnTop && !isOpen ? (
            <img src={Logo} alt="backroads logo" />
          ) : (
            <img src={LogoColors} alt="backroads logo" />
          )}
          <RoundButton nav onClick={toggleNav}>
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
                  {" "}
                  <AniLink paintDrip hex="#16b186" to={item.path} duration={1}>
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
