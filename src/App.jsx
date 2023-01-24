import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPOV as Fpov } from './components/FPOV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelector'
import { Menu } from './components/Menu'

function App () {
  	return (
			<>
				<Canvas>
					<Sky sunPosition={[100, 100, 20]} />
					<ambientLight intensity={0.5} />
					<Fpov />
					<Physics>
						<Player />
						<Cubes />
						<Ground />
					</Physics>
				</Canvas>
				<Menu />
				<div className='pointer'>+</div>
				<TextureSelector />
			</>
  	)
}

export default App
