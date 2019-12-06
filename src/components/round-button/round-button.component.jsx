import styled from "styled-components"

const RoundButton = styled.button`
  background: var(--primaryColor);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.nav ? '0' : '1rem'};
  width: ${props => props.big ? '60px' : '48px'};
  height: ${props => props.big ? '60px' : '48px'};
  border-radius: 50%;
  color: white;
  border: 2px var(--primaryColor) solid;
  position: ${props => props.floating ? 'fixed' : 'static'};
  bottom: 0.5rem;
  right: 0.5rem;
  box-shadow: 0px 18px 38px -12px rgba(0,0,0,0.35);
  transition: all 0.25s ease-in;
  z-index: 9999;
  :hover {
    color: var(--primaryColor);
    border-color: var(--primaryColor);
    background: white;
  }
  @media (min-width: 992px) {
    display: none;
  }
`

export default RoundButton