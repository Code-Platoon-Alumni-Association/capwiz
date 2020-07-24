import React, { useState } from 'react'
import useInterval from './useInterval'
import logoatee from './assets/logoatee.png'
import logoload from './assets/logoload.png'
import logolove from './assets/logolove.png'
import logolook from './assets/logolook.png'
import logotalk from './assets/logotalk.png'
import styled from 'styled-components';


const WizardPhoto = styled.img`
  height: 50%;
  width: 50%;
`;

export default function CapwizTheVirtual() {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [on, setOn] = useState(true);
  const photos = Array.from([logoatee, logoload, logolook, logolove, logotalk])

  useInterval(() => {
    const next = currentPhoto >= photos.length - 1 ? 0 : (currentPhoto + 1)
    on && setCurrentPhoto(next);
  }, 1000)

  return (
    <WizardPhoto onClick={() => setOn(!on)} src={photos[currentPhoto]} className="App-logo" alt="logo" />
  )
}
