import React from "react"

import Title from "../../title/title.component"
import SectionDescription from "../../section-description/section-description.component"
import Seccion from "../../seccion/seccion.component"
import Center from "../../center/center.component"
import { FaLongArrowAltRight } from "react-icons/fa"

import services from "../../../constants/services/services"

import styles from "./areas.module.css"

const Areas = () => {
  return (
    <Seccion offWhite>
      <Title title="Una solución completa a tus necesidades" />
      <SectionDescription
        textFirst="Next level food truck messenger chartreuse. Snackwave gentrify vinyl cold-pressed vaporware cornelia."
        textSecond="Franzen meditation echo park jianbing, banjo chambray narwhal XOXO bushwick flexitarian."
      />
      <Center background>
        <div className={styles.center}>
          {services.map((item, index) => {
            return (
              <article key={index} className={styles.area}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <p>{item.text}</p>
                <a href="/">
                  <span>{item.title}</span>
                  <FaLongArrowAltRight />
                </a>
              </article>
            )
          })}
        </div>
      </Center>
    </Seccion>
  )
}

export default Areas
