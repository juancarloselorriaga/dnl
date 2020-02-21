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
  padding: ${props => props.padding && "6rem 0"};
  background: ${props => props.offWhite && "var(--offWhite)"};

  ${breakpoint("tablet")`
  `}

  ${breakpoint("desktop")`
  padding: ${props =>
    props.padding && props.arched ? "8rem 0" : props.padding && "4rem 0"};
  `}
`
