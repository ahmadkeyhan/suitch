import { motion } from "framer-motion/three";
export function Block({ position, suitchedOn, structure }) {
  const boxes = [];
  console.log(structure);
  if (structure === "o") {
    const struc = [
      [0, 0, 0],
      [0, 0, 1],
      [0, 0, 2],
      [1, 0, 0],
      [1, 0, 1],
      [1, 0, 2],
      [2, 0, 0],
      [2, 0, 1],
      [2, 0, 2],
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 2],
      [1, 1, 0],
      [1, 1, 1],
      [1, 1, 2],
      [2, 1, 0],
      [2, 1, 1],
      [2, 1, 2],
      [0, 2, 0],
      [0, 2, 2],
      [1, 2, 0],
      [1, 2, 2],
      [2, 2, 0],
      [2, 2, 2],
      [0, 3, 0],
      [0, 3, 2],
      [1, 3, 0],
      [1, 3, 2],
      [2, 3, 0],
      [2, 3, 2],
      [0, 4, 0],
      [0, 4, 1],
      [0, 4, 2],
      [1, 4, 0],
      [1, 4, 1],
      [1, 4, 2],
      [2, 4, 0],
      [2, 4, 1],
      [2, 4, 2],
      [0, 5, 0],
      [0, 5, 1],
      [0, 5, 2],
      [1, 5, 0],
      [1, 5, 1],
      [1, 5, 2],
      [2, 5, 0],
      [2, 5, 1],
      [2, 5, 2],
      [0, 6, 0],
      [0, 6, 1],
      [0, 6, 2],
      [1, 6, 0],
      [1, 6, 1],
      [1, 6, 2],
      [2, 6, 0],
      [2, 6, 1],
      [2, 6, 2]
    ];
    struc.map((pos, index) =>
      boxes.push(
        <Box
          key={`s${structure}${index}`}
          position={pos}
          suitchedOn={suitchedOn}
        />
      )
    );
    return <group position={position}>{boxes}</group>;
  }
  if (structure === "n") {
    const struc = [
      [0, 0, 0],
      [0, 0, 2],
      [1, 0, 0],
      [1, 0, 2],
      [2, 0, 0],
      [2, 0, 2],
      [0, 1, 0],
      [0, 1, 2],
      [1, 1, 0],
      [1, 1, 2],
      [2, 1, 0],
      [2, 1, 2],
      [0, 2, 0],
      [0, 2, 2],
      [1, 2, 0],
      [2, 2, 0],
      [2, 2, 2],
      [0, 3, 0],
      [0, 3, 2],
      [1, 3, 0],
      [2, 3, 0],
      [2, 3, 2],
      [0, 4, 0],
      [0, 4, 1],
      [0, 4, 2],
      [1, 4, 0],
      [1, 4, 1],
      [1, 4, 2],
      [2, 4, 0],
      [2, 4, 1],
      [2, 4, 2],
      [0, 5, 0],
      [0, 5, 1],
      [0, 5, 2],
      [1, 5, 0],
      [1, 5, 1],
      [1, 5, 2],
      [2, 5, 0],
      [2, 5, 1],
      [2, 5, 2],
      [0, 6, 0],
      [0, 6, 1],
      [0, 6, 2],
      [1, 6, 0],
      [1, 6, 1],
      [1, 6, 2],
      [2, 6, 0],
      [2, 6, 1],
      [2, 6, 2]
    ];
    struc.map((pos, index) =>
      boxes.push(
        <Box
          position={pos}
          key={`s${structure}${index}`}
          suitchedOn={suitchedOn}
        />
      )
    );
    return <group position={position}>{boxes}</group>;
  }
  if (structure === "f") {
    const struc = [
      [0, 0, 2],
      [1, 0, 2],
      [2, 0, 2],
      [0, 1, 1],
      [0, 1, 2],
      [1, 1, 1],
      [1, 1, 2],
      [2, 1, 1],
      [2, 1, 2],
      [0, 2, 2],
      [1, 2, 2],
      [2, 2, 2],
      [0, 3, 2],
      [1, 3, 2],
      [2, 3, 2],
      [0, 4, 0],
      [0, 4, 1],
      [0, 4, 2],
      [1, 4, 0],
      [1, 4, 1],
      [1, 4, 2],
      [2, 4, 0],
      [2, 4, 1],
      [2, 4, 2],
      [0, 5, 0],
      [0, 5, 1],
      [0, 5, 2],
      [1, 5, 0],
      [1, 5, 1],
      [1, 5, 2],
      [2, 5, 0],
      [2, 5, 1],
      [2, 5, 2],
      [0, 6, 0],
      [0, 6, 1],
      [0, 6, 2],
      [1, 6, 0],
      [1, 6, 1],
      [1, 6, 2],
      [2, 6, 0],
      [2, 6, 1],
      [2, 6, 2]
    ];
    struc.map((pos, index) =>
      boxes.push(
        <Box
          key={`s${structure}${index}`}
          position={pos}
          suitchedOn={suitchedOn}
        />
      )
    );
    return <group position={position}>{boxes}</group>;
  }
}

function Box({ position, suitchedOn }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <motion.meshStandardMaterial
        initial={{ color: "white" }}
        animate={{
          color: suitchedOn ? "rgb(200,10,10)" : "rgb(0,136,30)"
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </mesh>
  );
}
