import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../../title/title.component"
import SectionDescription from "../../section-description/section-description.component"
import Seccion from "../../seccion/seccion.component"
import Center from "../../center/center.component"
import Container from "../../container/container.component"

const getCustomers = graphql`
  query {
    customers: allContentfulClientes {
      edges {
        node {
          id
          nombre
          slug
          imagen {
            fluid(maxWidth: 180) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Customers = ({ className }) => {
  const response = useStaticQuery(getCustomers)
  const customers = response.customers.edges

  return (
    <Seccion offWhite centered>
      <Container offWhite padding>
        <Center offWhite>
          <Title title="Nuestros clientes." />
          <SectionDescription text="Nuestros clientes hablan por nosotros. En DNL apoyamos a grandes marcas, te apoyamos a ti." />
          <div className={className}>
            {customers.map(({ node }) => (
              <div className="item" key={node.id}>
                <Img fluid={node.imagen.fluid} />
              </div>
            ))}
          </div>
        </Center>
      </Container>
    </Seccion>
  )
}

export default styled(Customers)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    margin: 1rem;
    border-radius: 11px;
    filter: opacity(25%);
  }

  .gatsby-image-wrapper {
    width: 200px;
    display: flex;
    img {
      object-fit: contain !important;
      filter: grayscale(100%);
    }
  }

  ${breakpoint("tablet")`
    flex-direction: row;
    .item {
      margin: 1rem 2rem;
  }


  `}

  ${breakpoint("desktop")`
  `}
`
