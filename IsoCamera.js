import { useThree, useFrame } from "@react-three/fiber";
import { LayoutOrthographicCamera } from "framer-motion/three";

export default function IsoCamera() {
  const three = useThree();
  useFrame(() => three.camera.lookAt(0, 0, 0));
  return <LayoutOrthographicCamera position={[10, 10, 10]} zoom={25} />;
}
