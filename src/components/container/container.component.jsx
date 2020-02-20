import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const Container = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

export default styled(Container)`
  width: 100%;
  max-width: 1140px;
  height: auto;

  ${breakpoint("tablet")`
  `}

  ${breakpoint("desktop")`
  `}
`
