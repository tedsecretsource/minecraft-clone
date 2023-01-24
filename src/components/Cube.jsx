import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import { useStore } from '../hooks/useStore'
import * as textures from '../images/textures.js'

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [removeCube] = useStore(state => [state.removeCube])

  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh 
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      onClick={(e) => {
        e.stopPropagation()

        if (e.altKey) {
          removeCube(id)
        }
        
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial 
        map={activeTexture} 
        attach='material' 
        transparent={true}
        opacity={texture === 'glass' ? 0.8 : 1}
        color={isHovered ? 'grey' : 'white'}
      />
    </mesh>
  )
}