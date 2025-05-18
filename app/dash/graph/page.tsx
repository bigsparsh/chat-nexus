"use client";

import { init } from "./canvas";
import { useEffect, useRef } from "react";

const Graph = () => {
  const graphContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gets = async () => {
      if (!graphContainer.current || !graphContainer) return;
      await init(graphContainer.current);
    }
    gets();
  }, [])

  return <div className="grow outline-none" ref={graphContainer}>

  </div>
}
export default Graph;
