export function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        intensity={0.5}
        position={[0, 5, 0]}
        rotation={[1.8, 0, 0]}
      />
      <directionalLight
        castShadow
        intensity={0.3}
        position={[0, 0, 5]}
        rotation={[0, 0, 0]}
      />
      <directionalLight
        castShadow
        intensity={0.3}
        position={[-5, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </>
  );
}
