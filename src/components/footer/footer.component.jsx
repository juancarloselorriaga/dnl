import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Seccion from "../seccion/seccion.component"
import Center from "../center/center.component"

import links from "../../constants/links/links.constant"
import socialIcons from "../../constants/social-icons/social-icons.constant"

import Logo from "../../assets/logoWhite.svg"

const Footer = ({ className }) => {
  return (
    <Seccion offWhite arched footer className={className}>
      <Center offWhite>
        <div className="links">
          {links.map((item, index) => {
            return (
              <AniLink key={index} fade to={item.path}>
                {item.text}
              </AniLink>
            )
          })}
        </div>
        <div className="brand">
          <img src={Logo} alt="backroads logo" />
          <p>
            Meditation hot chicken fanny pack, pickled vinyl sartorial tote bag
            wolf. Shaman organic scenester messenger bag vice, yuccie pitchfork
            ethical succulents. XOXO whatever waistcoat squid heirloom 3 wolf
            moon lomo four loko ennui ramps live-edge. Semiotics truffaut
            artisan kickstarter hot chicken viral gentrify.
          </p>
        </div>
        <div className="icons">
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
        <div className="copyright">
          marca registrada &copy; desarrollo de negocios lomas{" "}
          {new Date().getFullYear()} todos los derechos reservados.
        </div>
        <div className="aviso-de-privacidad">
          <AniLink to="/aviso-de-privacidad">
            <span>Aviso de privacidad</span>
          </AniLink>
        </div>
      </Center>
    </Seccion>
  )
}

export default styled(Footer)`
  .aviso-de-privacidad {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .aviso-de-privacidad span {
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--darkGrey);
  }

  .aviso-de-privacidad a {
    text-decoration: underline;
    color: var(--darkGrey);
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icons {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .brand {
    margin: 4rem 0 1rem 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .links a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--mainBlackText);
    margin: 0.5rem 0;
    font-size: 1.25rem;
    letter-spacing: var(--mainSpacing);
    transition: var(--mainTransition);
    font-weight: 600;
  }
  .links a:hover {
    color: var(--primaryColor);
  }
  .icons a {
    display: inline-flex;
    margin: 0.5rem 1rem;
    font-size: 1.3rem;
    color: var(--mainBlackText);
    transition: var(--mainTransition);
  }
  .icons a:hover {
    color: var(--primaryColor);
  }
  .copyright {
    margin: 1rem 0;
    text-transform: capitalize;
    font-weight: 300;
    font-size: 0.6rem;
    text-align: left;
    letter-spacing: var(--mainSpacing);
    color: var(--mainBlackText);
    line-height: 2;
    width: 100%;
  }

  .brand p {
    color: var(--mainBlackText);
    font-size: 0.8rem;
    margin: 1rem 0 0 0;
    text-align: left;
  }
  ${breakpoint("tablet")`
    .links {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .links a {
    margin: 0.5rem 3rem;
  }
  `}
`
