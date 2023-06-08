// Write your code here

import {useState} from 'react'
import {
  AppContainer,
  LockContainer,
  LockImage,
  LockText,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLockStatus] = useState(true)

  const onToggleButton = () => {
    setLockStatus(previousState => !previousState)
  }

  const imageUrl = lockStatus
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const imageAlt = lockStatus ? 'lock' : 'unlock'

  const displayText = lockStatus
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'

  const buttonText = lockStatus ? 'Unlock' : 'Lock'

  return (
    <AppContainer>
      <LockContainer>
        <LockImage src={imageUrl} alt={imageAlt} />
        <LockText>{displayText}</LockText>
        <LockButton onClick={onToggleButton}>{buttonText}</LockButton>
      </LockContainer>
    </AppContainer>
  )
}

export default Unlock
