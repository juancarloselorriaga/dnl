import React from "react"

import Title from "../../title/title.component"
import Card from "../../card/card.component"
import Seccion from "../../seccion/seccion.component"
import Center from "../../center/center.component"

import servicios from "../../../constants/services/servicios"

const Servicios = () => {
  return (
    <Seccion offWhite>
      <Title title="Inbound. Asesoría. Te ayudamos." />
      <Center>
        {servicios.map(({ title, img, content }, index) => {
          return (
            <Card
              key={index}
              title={title}
              img={img}
              content={content}
              textoBoton="Leer más"
            />
          )
        })}
      </Center>
    </Seccion>
  )
}

export default Servicios
