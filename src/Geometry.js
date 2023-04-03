import { motion } from "framer-motion/three";
import { Block } from "./Block";
export function Geometry({ suitchedOn }) {
  const blocks = [];
  for (let r = -0.5; r < 1; r++) {
    for (let c = -0.5; c < 1; c++) {
      blocks.push(
        <Block
          structure={
            r === -0.5 && c === -0.5 ? "o" : r === -0.5 && c === 0.5 ? "n" : "f"
          }
          suitchedOn={suitchedOn}
          key={`${r}-${c}`}
          position={[4 * r, 0, 4 * c]}
        />
      );
    }
  }
  return (
    <motion.group
      initial={false}
      animate={
        suitchedOn ? { z: -3.5, rotateY: 0 } : { z: 3.5, rotateY: Math.PI }
      }
      transition={{ duration: 0.6, ease: "backInOut" }}
    >
      {blocks}
    </motion.group>
  );
}
