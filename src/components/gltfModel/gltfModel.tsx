import { gltfModelProp } from "@/data"
import { Environment } from "@react-three/drei"
import { group } from "console"
import { useLoader } from "react-three-fiber"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
export default function GltfModel({modelPath,position}:gltfModelProp){
    const gltf = useLoader(GLTFLoader, modelPath)
    return(
            // <group>
                <primitive object={gltf.scene} position={position}/>
                // {/* <Environment files="/photo_studio_loft_hall_2k.hdr" /> */}
            // {/* </group> */}
        )
}