import React from "react"
import styled from "styled-components"

import Title from "../title/title.component"
import Card from "../card/card.component"
import Boton from "../boton/boton.component"
import Seccion from "../seccion/seccion.component"
import Center from "../center/center.component"

import blogPosts from "../../data-temp/blog-posts"

const BlogPosts = ({ className }) => {
  return (
    <Seccion offWhite className={className}>
      <Title title="Noticias, anuncios y blog." />
      <Center>
        {blogPosts.map(({ title, img, content }, index) => {
          return (
            <Card
              key={index}
              title={title}
              img={img}
              content={content}
              textoBoton="Ver post"
            />
          )
        })}
      </Center>
      <div className="button-wrapper">
        <Boton title="ver todos los posts" />
      </div>
    </Seccion>
  )
}

export default styled(BlogPosts)`
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
    width: 100%;
  }
`
