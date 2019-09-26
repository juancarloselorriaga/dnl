import React from "react"
import styled from "styled-components"
import Checkbox from "react-simple-checkbox"

const Decision = ({ handleCheckboxUpdate, isChecked, label, className }) => {
  return (
    <div className={className}>
      <div className="check-box">
        <Checkbox
          color="#16b186"
          size="2"
          checked={isChecked}
          onChange={handleCheckboxUpdate}
        />
      </div>
      <div className="label-wrapper">
        <label>{label}</label>
      </div>
    </div>
  )
}

export default styled(Decision)`
  color: ${props =>
    props.light ? "var(--mainBlackText)" : "var(--mainWhite)"};
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .label-wrapper {
    margin-left: 1rem;
    font-size: 0.7rem;
    font-weight: 300;
  }

  .label-wrapper label {
    margin: 0;
    font-size: 0.7rem;
    padding-top: 0.5rem;
  }
`
