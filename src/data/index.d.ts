import { RefObject } from "react";
import { Vector3 } from "react-three-fiber";

interface gltfModelProp {
  modelPath: string;
  position?: Vector3 | number[];
}

interface HeadsetProp {
  props: JSX.IntrinsicElements["group"];
  refer: RefObject<HTMLDivElement>;
}
