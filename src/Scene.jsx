import React from 'react'
import { Center, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Headphone } from './Headphone'
import { useHelper } from '@react-three/drei'
import { RectAreaLightHelper } from 'three-stdlib'
import { RectAreaLightUniformsLib } from 'three-stdlib'
import { Perf } from 'r3f-perf'



const Scene = () => {

  const model = useRef()
  const camera= useRef()
  const dirLightRef = useRef()
  const rectLightRef = useRef()
  const rectLightRef1 = useRef()

  useHelper(dirLightRef, THREE.DirectionalLightHelper, 1, 'red')
useHelper(rectLightRef, RectAreaLightHelper, 'cyan')
useHelper(rectLightRef1, RectAreaLightHelper, 'cyan')


useFrame((state,delta)=>{

model.current.rotation.x=THREE.MathUtils.lerp(

  model.current.rotation.x, 
state.pointer.x/20,
0.01)

model.current.rotation.x=THREE.MathUtils.lerp(

  model.current.rotation.x, 
state.pointer.y/20,
0.01)})


RectAreaLightUniformsLib.init()
          const width = window.innerWidth
        const isMobile = width < 640
        const isTablet = width >= 640 && width < 1024
 
        const groupositionx =isMobile? 0 : isTablet? 0 : -4
        const groupositiony = isMobile ? -2.5 :isTablet ? -0.5 :-1
        const groupositionz = isMobile ? 0 :isTablet ? 0 : 0
        const groupscale = isMobile ? 0.5 :isTablet ? 1 : 1



  return (<>
  
  {/* <Perf position="top-left" minimal={false} /> */}
 <PerspectiveCamera ref={camera} makeDefault  position={[0 ,0, 10]} fov={45}/>
   {/* <Environment files={"/studio_small_04_1k.hdr"} environmentIntensity={0} environmentRotation={[1,0,1]}/> */}
          
          
          <directionalLight/>
          <directionalLight  intensity={2} position={[5,-1,0]}/>
          <directionalLight ref={dirLightRef}  intensity={0.7} position={[3,1,0]}/>

         <directionalLight  intensity={0.2} position={[5,-1,20]}/>
         {/* <directionalLight intensity={0} position={[5,-10,100]}/> */}
       
       
     
        <rectAreaLight
        ref={rectLightRef1}
        width={10}
        height={20}
        intensity={1}
        rotation={[0.2,0,0]}
        position={[-2, -6 , 4]}
        color="#ffffff"
      /> 

     <rectAreaLight
        ref={rectLightRef}
        width={4}
        height={4}
        intensity={5}
        rotation={[1,0,0]}
        position={[5, -3, 10]}
        color="#ffffff"
      /> 

      
      


    <group  ref={model} position={[groupositionx,groupositiony,groupositionz]} scale={groupscale} rotation={[0,2.7,0]}>
   
 <group >
   
    <Headphone/>
  </group>
    </group>
  
    {/* <OrbitControls /> */}
    </>
    
  )
}

export default Scene