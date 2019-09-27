import React from "react"
import styled from "styled-components"

import Boton from "../components/boton/boton.component"
import Layout from "../components/layout/layout.component"

const Error = ({ className }) => {
  return (
    <Layout>
      <header className={className}>
        <h1>Oops! Llegaste a una ruta que no existe.</h1>
        <Boton contrast title="volver al inicio" to="/" />
      </header>
    </Layout>
  )
}

export default styled(Error)`
  background: var(--primaryColor);
  min-height: calc(100vh - 62px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    text-align: center;
  }
`
