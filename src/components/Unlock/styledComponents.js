// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #161617;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const LockImage = styled.img`
  width: 100px;
  height: 100px;
`

export const LockText = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #ffffff;
`

export const LockButton = styled.button`
  font-size: 18px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 3px;
  border: none;
  background-color: #06b6d4;
  cursor: pointer;
  margin-top: 25px;
`
