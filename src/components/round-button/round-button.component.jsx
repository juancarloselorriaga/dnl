import styled from "styled-components"

const primaryColor = '#16b186'

const RoundButton = styled.button`
  background: ${primaryColor};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: ${props => props.big ? '60px' : '48px'};
  height: ${props => props.big ? '60px' : '48px'};
  border-radius: 50%;
  color: white;
  border: 2px ${primaryColor} solid;
  position: ${props => props.floating ? 'absolute' : 'static'};
  bottom: 0.5rem;
  right: 0.5rem;
  box-shadow: 0px 18px 38px -12px rgba(0,0,0,0.35);
  transition: all 0.25s ease-in;
  :hover {
    color: ${primaryColor};
    border-color: ${primaryColor};
    background: white;
  }
  @media (min-width: 992px) {
    display: none;
  }
`

export default RoundButton