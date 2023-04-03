// Originally forked from https://codesandbox.io/s/r3f-basic-demo-3izwu?file=/src/App.js:0-2775
import "./styles.css";
import { useState, Suspense } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Scene } from "./Scene";
import { transition } from "./settings";

export default function App() {
  const [suitchedOn, setSuitch] = useState(false);

  return (
    <MotionConfig transition={transition}>
      <div data-is-fullscreen onClick={() => setSuitch(!suitchedOn)}>
        <motion.div className="container" layout>
          <Suspense fallback={null}>
            <Scene suitchedOn={suitchedOn} />
          </Suspense>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
