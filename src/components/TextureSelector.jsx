import { useStore } from '../hooks/useStore'
import { useEffect, useState } from 'react' 
import { dirtImg, grassImg, glassImg, logImg, woodImg } from '../images/images'
import { useKeyboard } from '../hooks/useKeyboard'

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
}

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true)
  const [activeTexture, setTexture] = useStore(state => [state.texture, state.setTexture])
  const { dirt, grass, glass, wood, log } = useKeyboard()

  
  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log
    }
    
    const pressedTexture = Object
      .entries(textures)
      .find(([k, v]) => v)
    
    if (pressedTexture) {
      setTexture(pressedTexture[0])
    }
    
  }, [setTexture, dirt, grass, glass, wood, log])
  
  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(true)
    }, 1000)

    setVisible(true)

    return () => {
      clearTimeout(visibilityTimeout)
    }
  }, [activeTexture])

  return visible && (
    <div className='texture-selector'>
      {Object.entries(images).map(([k, src]) => {
        return (
          <img 
            className={`${k === activeTexture ? 'active' : ''}`}
            key={k}
            src={src}
            alt={k}
          />)
      })}
    </div>
  )

}