import React, { useLayoutEffect, useRef, useState } from 'react'
import { Environment, useScroll} from '@react-three/drei'
import { useFrame, useLoader } from "react-three-fiber"
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
function DEG2RAD(x:number){
  return  (x/180)*Math.PI;
 }

export function Light(props:JSX.IntrinsicElements["group"]) {

    const [color,setColor]=useState<string>("#00ff00")

  //setting up gsap
  const light=useRef(null)
  const tl=useRef<GSAPTimeline>()

  const scroll = useScroll()

  useFrame((state,delta)=>{
    tl.current?.seek(scroll.offset*tl.current?.duration())
  })
  useLayoutEffect(()=>{
      tl.current=gsap.timeline({
        defaults:{duration:2,ease:'power1.inOut'}
      })
      if(light.current){
        tl.current
        .to(light.current['position'],{x:0,y:-3,z:-10},1)
        
        .to(light.current['rotation'], {y:DEG2RAD(0)},3)
        
        .to(light.current['rotation'], {y:DEG2RAD(0), x:DEG2RAD(4),z:DEG2RAD(5)},6)
        .to(light.current['position'],{x:0.1,y:-1.9,z:-5.9},6)
        
        
        
        .to(light.current['rotation'], {y:DEG2RAD(90), x:DEG2RAD(20),z:DEG2RAD(5)},8)
        .to(light.current['position'],{x:5,y:-3,z:-10},8)
        
        
        .to(light.current['rotation'], {y:DEG2RAD(70), x:DEG2RAD(20),z:DEG2RAD(5)},10)
        
        .to(light.current['rotation'], {y:DEG2RAD(70)},12)
      }

  },[])

  return (
    <>
    <group {...props} dispose={null} ref={light} scale={1.1}>
      <mesh>
        <circleBufferGeometry args={[1]} />
        <meshStandardMaterial emissive={color} emissiveIntensity={10}/>
      </mesh>
    </group>
    <Environment files={"/photo_studio_loft_hall_2k.hdr"} />
    </>
  )
}
