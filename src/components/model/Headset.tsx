import React, { useLayoutEffect, useRef } from 'react'
import { Environment, useScroll} from '@react-three/drei'
import { useFrame, useLoader } from "react-three-fiber"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { HeadsetProp } from '@/data'

gsap.registerPlugin(ScrollTrigger)
function DEG2RAD(x:number){
  return  (x/180)*Math.PI;
 }

export function Headset(props: HeadsetProp) {
  const gltf = useLoader(GLTFLoader, "/headset.glb")

  //setting up gsap
  const headset=useRef(null)
  const tl=useRef<GSAPTimeline>()

  const scroll = useScroll()

  useFrame((state,delta)=>{
    tl.current?.seek(scroll.offset*tl.current?.duration())
    // console.log(scroll)
  })
  useLayoutEffect(()=>{
      tl.current=gsap.timeline({
        defaults:{duration:2,ease:'power1.inOut'}
      })
      if(headset.current){
        tl.current
        .to(headset.current['rotation'],{y:DEG2RAD(90)},1)
        .to(headset.current['position'],{x:0,y:-3,z:-10},1)
        
        .to(headset.current['rotation'], {y:DEG2RAD(-90)},4)
        
        .to(headset.current['rotation'], {y:DEG2RAD(-180)},6)
        
        .to(headset.current['rotation'], {y:DEG2RAD(-90)},8)
        
        .to(headset.current['rotation'], {y:DEG2RAD(-90)},10)
        
        .to(headset.current['rotation'], {y:DEG2RAD(-145)},12)
      }

  },[])

  return (
    <>
    <group {...props.props} dispose={null} ref={headset}>
      <primitive object={gltf.scene}/>
    </group>
    <Environment files={"/photo_studio_loft_hall_2k.hdr"} />
    </>
  )
}
