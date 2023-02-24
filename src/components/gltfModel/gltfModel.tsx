import { gltfModelProp } from "@/data"
import { useLoader } from "react-three-fiber"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
export default function GltfModel({modelPath,position}:gltfModelProp){
    const gltf = useLoader(GLTFLoader, modelPath)
    return(
            <primitive object={gltf.scene} position={position}/>
        )
}