import React, { Suspense } from 'react'
import Scene from './Scene'
import { Canvas } from '@react-three/fiber'
import Overlay from './Overlay'
import {  Loader } from '@react-three/drei'


const App = () => {
  return (<>
     <div className='   h-full w-full'> 
        <div className='absolute z-20 inset-0 pointer-events-none'>
        <Overlay/>
      </div>
    <div className= 'inset-0 pointer-events-auto absolute z-10'>
    <Canvas  dpr={[1,3]}>
            <Suspense fallback={null}>
       <Scene />
             </Suspense>

    </Canvas>
    </div>
    <Loader/>
    

      </div>
   </>
  )
}

export default App