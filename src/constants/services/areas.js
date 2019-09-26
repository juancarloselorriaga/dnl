import React from "react"
import legal from '../../assets/legal.png'
import web from '../../assets/webIcon.png'
import synergy from '../../assets/synergyIcon.png'

export default [
  {
    icon: <img src={legal} alt='dnl legal' />,
    title: "DNL Legal",
    text:
      "Dreamcatcher intelligentsia roof party woke shaman, green juice la croix kogi selvage.",
  },
  {
    icon: <img src={web} alt='dnl web' />,
    title: "DNL Web",
    text:
      "Jianbing cloud bread cardigan taxidermy poke, eytar copper mug truffaut live-edge",
  },
  {
    icon: <img src={synergy} alt='dnl synergy' />,
    title: "DNL Synergy",
    text:
      "Synth tbh copper mug gentrify. Tattooed occupy meggings yuccie snackwave meh pinterest seitan. ",
  },
]

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// const getImages = graphql`
//   query Image {
//     legal: file(relativePath: { eq: "legal.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//     web: file(relativePath: { eq: "webIcon.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//     synergy: file(relativePath: { eq: "synergyIcon.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `

// const { legal, web, synergy } = useStaticQuery(getImages)

// export default [
//   {
//     icon: <Img fluid={legal.childImageSharp.fluid} />,
//     title: "DNL Legal",
//     text:
//       "Dreamcatcher intelligentsia roof party woke shaman, green juice la croix kogi selvage.",
//   },
//   {
//     icon: <Img fluid={web.childImageSharp.fluid} />,
//     title: "DNL Web",
//     text:
//       "Jianbing cloud bread cardigan taxidermy poke, eytar copper mug truffaut live-edge",
//   },
//   {
//     icon: <Img fluid={synergy.childImageSharp.fluid} />,
//     title: "DNL Synergy",
//     text:
//       "Synth tbh copper mug gentrify. Tattooed occupy meggings yuccie snackwave meh pinterest seitan. ",
//   },
// ]
