/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/headset.glb -t
*/

import React, { useRef } from 'react'
import { Environment, useScroll } from '@react-three/drei'
import { ThreeElements, useLoader } from "react-three-fiber"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import gsap from "gsap"

export function Headset(props: JSX.IntrinsicElements['group']) {
  const gltf = useLoader(GLTFLoader, "/headset.glb")

  //setting up gsap
  const headset=useRef(null)
  const scroll = useScroll()
  const tl=useRef()

  return (
    <>
    <group {...props} dispose={null} ref={headset}>
      <primitive object={gltf.scene}/>
    </group>
    <Environment files={"/photo_studio_loft_hall_2k.hdr"} />
    </>
  )
}
