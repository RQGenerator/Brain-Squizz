import Styled from 'styled-components'

export const GameDiv = Styled.div`
  background-color: white;
  width: 100%;
  min-height: 80vh;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`
export const TopBar = Styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
`
export const BottomBar = Styled.div`
  padding: 5px;
`

export const skipStart = ' background-color: #018E42 '

export const skipOne = Styled.div`
color: #F7D002;
`
export const skipTwo = Styled.div`
color: #FFA500;
`
export const skipThree = Styled.div`
color: #BF1A2F;
`
