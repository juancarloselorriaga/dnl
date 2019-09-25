import React from "react"

import Boton from "../../boton/boton.component"
import Center from "../../center/center.component"
import Seccion from '../../seccion/seccion.component'

import img from "../../../assets/marketingTarget.png"

import styles from "./about.module.css"

const About = () => {
  return (
    <Seccion arched>
      <Center arched>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="targeting marketing" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>el marketing digital está aquí</h4>
          <p className='left'>
            Hexagon salvia austin godard succulents tattooed celiac bushwick
            raclette poutine snackwave enamel pin. Leggings prism artisan, fixie
            marfa lomo butcher paleo authentic
          </p>
          <p className='left'>
            Ethical synth next level post-ironic cliche. Pok pok poke fashion
            axe, palo santo narwhal cronut food truck. DIY you probably haven't
            heard of them salvia, jianbing pitchfork brooklyn kinfolk cray raw
            denim echo park kogi kale chips ethical.
          </p>
          <Boton title="leer más" />
        </article>
      </Center>
    </Seccion>
  )
}

export default About
