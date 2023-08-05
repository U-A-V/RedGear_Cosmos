import { Dispatch, RefObject, SetStateAction } from "react";
import { Vector3 } from "react-three-fiber";

interface gltfModelProp {
  modelPath: string;
  position?: Vector3 | number[];
}

interface HeadsetProp {
  props: JSX.IntrinsicElements["group"];
  refer: RefObject<HTMLDivElement>;
  color: string;
}

interface VideoProp {
  src: string;
}

interface featureProp {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}
