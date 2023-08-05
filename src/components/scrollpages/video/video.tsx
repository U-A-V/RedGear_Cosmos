import { VideoProp } from "@/data";
import { useState } from "react";
import * as THREE from "three";



export default function Video({src}:VideoProp){
    const [video]=useState(()=>{
        const vid=document.createElement("video");
        vid.src=src;
        vid.crossOrigin="anonymous"
        vid.loop=true;
        vid.play()
        return vid;

    })

    return(
        <group>
            <mesh rotation={[0,0,0]} position={[0,0, -20]}>
                <planeBufferGeometry args={[20,15]} />
                <meshStandardMaterial side={THREE.DoubleSide}>
                    <videoTexture attach="map" args={[video]} />
                </meshStandardMaterial>

            </mesh>
        </group>
    )
}