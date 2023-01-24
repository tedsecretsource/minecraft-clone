import { nanoid } from 'nanoid'
import create from 'zustand'

const getLocalStorage = (id) => JSON.parse(window.localStorage.getItem(id))
const setLocalStorage = (id, value) => window.localStorage.setItem(id, JSON.stringify(value))

export const useStore = create(set => ({
  texture: 'dirt',
  cubes: getLocalStorage('cubes') || [],
  
  addCube: (x, y, z) => {
    set(prev => ({
      cubes: [...prev.cubes, {
        id: nanoid(),
        pos: [x, y, z],
        texture: prev.texture
      }]
    }))
  },

  removeCube: (id) => {
    set(state => ({
      cubes: state.cubes.filter(cube => cube.id !== id)
    }))
  },

  setTexture: (texture) => {
    set(() => ({ texture }))
  },
  
  saveWorld: () => {
    set((state) => {
      setLocalStorage('cubes', state.cubes)
    })
  },
  
  resetWorld: () => {
    set(() => ({
      cubes: []
    }))
  }
}))