import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

import { AiOutlineRise } from "react-icons/ai"
import { MdDeveloperMode } from "react-icons/md"
import { GiClick } from "react-icons/gi"

import BackgroundImage from "gatsby-background-image"
import Subscribe from "../components/subscribe/subscribe.component"
import Seccion from "../components/seccion/seccion.component"
import Container from "../components/container/container.component"
import Center from "../components/center/center.component"
import Title from "../components/title/title.component"
import Subtitle from "../components/subtitle/subtitle.component"
import SEO from "../components/SEO/SEO.component"

import Logo from "../assets/logoWhite.svg"
import socialIcons from "../constants/social-icons/social-icons.constant.js"

const getLocalImgs = graphql`
  query {
    mainImg: file(relativePath: { eq: "DNLGraph.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    laptop: file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    businessTouch: file(relativePath: { eq: "business.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Campaign = ({ className }) => {
  const response = useStaticQuery(getLocalImgs)
  const mainImg = response.mainImg
  const laptop = response.laptop
  const businessTouch = response.businessTouch

  const services = [
    {
      icon: <AiOutlineRise className="icon" />,
      text: "Crece tus ventas digitales con DNL Web Business",
      url:
        "https://dnlomas.lpages.co/crece-tus-ventas-digitales-con-dnl-web-business/",
    },
    {
      icon: <MdDeveloperMode className="icon" />,
      text: "Conoce más acerca de DNL Web Business",
      url: "https://dnlomas.lpages.co/ventas-digitales2/",
    },
    {
      icon: <GiClick className="icon" />,
      text: "Metodologías DNL Web Business",
      url: "https://dnlomas.lpages.co/metodologias-dnl-web-business/",
    },
  ]

  return (
    <div className={className}>
      <SEO title="DNL Contra el COVID-19" />
      <BackgroundImage
        className="background-image"
        fluid={mainImg.childImageSharp.fluid}
      ></BackgroundImage>
      <Seccion darkSeparator>
        <Container padding>
          <div className="logo-container">
            <AniLink fade to="/">
              <img src={Logo} alt="dnl logo" />
            </AniLink>
          </div>
          <Center black>
            <Title
              darkBackground
              noBottomMargin
              title="La fórmula digital contra el COVID-19"
            />
            <Subtitle text="No dejes que el virus afecte tu negocio" />
            <div className="content-wrapper">
              <div className="content">
                <div className="image-text-wrapper">
                  <Img fluid={laptop.childImageSharp.fluid} className="img" />
                  <div className="text-wrapper">
                    <h4>
                      Que ésta epidemia no te impida continuar con tu plan de
                      negocios y tus objetivos comerciales.
                    </h4>
                    <p>
                      En estos tiempos de cambio y oportunidad, hay que pasar
                      más tiempo en casa, junto a los que más queremos. La
                      complicada situación que enfrenta el mundo requiere de
                      ajustar muchas cosas en nuestra vida cotidiana, entre
                      ellas, reducir radicalmente los desplazamientos de
                      personas, para al mismo tiempo reducir la posibilidad de
                      contagiar o de ser contagiado por el Covid-19.
                    </p>
                  </div>
                </div>
                <div className="image-text-wrapper text-wrapper-reverse">
                  <Img
                    fluid={businessTouch.childImageSharp.fluid}
                    className="img"
                  />
                  <div className="text-wrapper">
                    <p>
                      Con la fórmula DNL Web Business continua tus objetivos
                      comerciales en Internet, a través de estrategias
                      integrales dirigidas a tu mercado Web, que ahora está
                      pasando mucho tiempo en casa cuidándose, pero también
                      destinando mucho tiempo a sus redes sociales, investigando
                      y pensando que su negocio debe de continuar y de
                      sobrevivir en esta época. Tu mercado Web te está buscando
                      ahora y DNL Web Business te ayuda a aprovechar la
                      oportunidad de encontrarlo.
                    </p>
                    <p>
                      Las Estrategias Integrales DNL Web Business contribuyen
                      con ese propósito, al tiempo que continúes promoviendo y
                      comunicando al mercado el valor de tu negocio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Center>
        </Container>
      </Seccion>

      <Seccion darkSeparator>
        <Container>
          <Center black>
            <div className="content-wrapper">
              <div className="content">
                <h4>
                  Gracias por habernos permitido enviarte en correos anteiores
                  información acerca de las Estrategias Integrales DNL Web
                  Business, te invitamos a revisarlas nuevamente.
                </h4>
                <div className="service-wrapper">
                  {services.map((e, i) => (
                    <a
                      key={i}
                      className="service-item"
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={e.text}
                    >
                      {e.icon}
                      <span>{e.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Center>
        </Container>
      </Seccion>

      <Seccion darkSeparator>
        <Container padding>
          <Center black>
            <div className="content-wrapper">
              <div className="content">
                <h4>
                  Si tienes algún comentario, quires conocer más, coordinar una
                  llamada o una reunión, ponte en contacto con nosotros.
                </h4>
                <div className="nav-social-links">
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
            </div>
          </Center>
        </Container>
      </Seccion>
      <Subscribe />
    </div>
  )
}

export default styled(Campaign)`
  background: transparent;

  .content-wrapper {
    width: 100%;
  }

  .content {
    margin: 2rem 0;
    color: var(--offWhite);
    h4 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }
    p {
      line-height: 1.75rem;
    }
  }

  .logo-container {
    text-align: center;
    margin-bottom: 1rem;
  }

  .background-image {
    height: 5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    opacity: 1 !important;
    background-size: contain;
  }

  .img {
    width: 100%;
    padding-bottom: 25%;
    margin: 2rem 0;
    display: block;
    border-radius: 12px;
    box-shadow: var(--smoothShadow);
  }

  .service-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 3rem 0;
    color: var(--offWhite);
    .icon {
      font-size: 4rem;
      margin: 1.5rem;
    }
  }

  .nav-social-links {
    display: flex;
    justify-content: center;
    line-height: 0;
  }
  .nav-social-links a {
    color: var(--primaryColor);
    margin: 1rem;
    font-size: 1.8rem;
    transition: var(--mainTransition);
  }
  .nav-social-links a:hover {
    color: var(--mainGrey);
    transform: translateY(-5px);
  }

  ${breakpoint("desktop")`
  .image-text-wrapper {
    display: flex;
  }

  .img {
    width: 50%;
    padding-bottom: 15%;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 0 2rem;
  }

  .text-wrapper-reverse {
    flex-direction: row-reverse;
  }
  `}
`
