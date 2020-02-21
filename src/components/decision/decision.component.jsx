import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const Decision = ({ handleCheckboxUpdate, isChecked, label, className }) => {
  return (
    <div className={className}>
      <div className="check-box"></div>
      <div className="label-wrapper">
        <input
          id="cbx"
          name="isGoing"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxUpdate}
          style={{ display: "none" }}
        />
        <label htmlFor="cbx" className="check">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
        <label className="checkbox-label">{label}</label>
      </div>
    </div>
  )
}

export default styled(Decision)`
  color: ${props =>
    props.light ? "var(--mainBlackText)" : "var(--mainWhite)"};
  margin: 1rem 0 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .label-wrapper {
    font-size: 0.7rem;
    font-weight: 300;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
  }

  .label-wrapper checkbox-label {
    margin: 0;
    font-size: 0.7rem;
    padding-top: 0.5rem;
  }

  .label-wrapper input {
  }
  .check {
    cursor: pointer;
    position: relative;
    margin: auto;
    margin-right: 1rem;
    width: 18px;
    height: 18px;
    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);
  }
  .check:before {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(34, 50, 84, 0.03);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  .check svg {
    position: relative;
    z-index: 1;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: ${props =>
      props.light ? "var(--primaryColor)" : "var(--mainWhite)"};
    stroke-width: 1.5;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;
  }
  .check svg path {
    stroke-dasharray: 60;
    stroke-dashoffset: 0;
  }
  .check svg polyline {
    stroke-dasharray: 22;
    stroke-dashoffset: 66;
  }
  .check:hover:before {
    opacity: 1;
  }
  .check:hover svg {
    stroke: ${props =>
      props.light ? "var(--primaryColor)" : "var(--mainWhite)"};
  }
  #cbx:checked + .check svg {
    stroke: ${props =>
      props.light ? "var(--primaryColor)" : "var(--mainWhite)"};
  }
  #cbx:checked + .check svg path {
    stroke-dashoffset: 60;
    transition: all 0.3s linear;
  }
  #cbx:checked + .check svg polyline {
    stroke-dashoffset: 42;
    transition: all 0.2s linear;
    transition-delay: 0.15s;
  }
`
