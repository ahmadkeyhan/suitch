import { MotionCanvas } from "framer-motion/three";
import { IsoCamera } from "./IsoCamera";
import { Lights } from "./Lights";
import { Geometry } from "./Geometry";

export function Scene({ suitchedOn }) {
  return (
    <MotionCanvas dpr={[2, 3]}>
      <IsoCamera />
      <Lights />
      <Geometry suitchedOn={suitchedOn} />
    </MotionCanvas>
  );
}
