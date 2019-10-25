import React, { useState } from 'react'
import useInterval from './useInterval'
import logoatee from './assets/logoatee.png'
import logoload from './assets/logoload.png'
import logolove from './assets/logolove.png'
import logolook from './assets/logolook.png'
import logotalk from './assets/logotalk.png'

export default function CapwizTheVirtual() {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const photos = Array.from([logoatee, logoload, logolook, logolove, logotalk])

  useInterval(() => {
    const next = currentPhoto >= photos.length - 1 ? 0 : (currentPhoto + 1)
    setCurrentPhoto(next);
  }, 1000)

  return (
    <img src={photos[currentPhoto]} className="App-logo" alt="logo" />
  )
}
