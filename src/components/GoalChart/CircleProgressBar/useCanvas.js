import { useRef, useState, useEffect } from "react";

const useCanvas = ({ width, height } = {}) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [draw, setDraw] = useState(() => () => null);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.style.width = width || "100%";
    canvas.height = height || Math.round(canvas.width * 0.61803398);

    setCtx(canvas.getContext("2d"));
  }, [width, height]);

  useEffect(() => {
    if (ctx) {
      draw(ctx);
    }
  }, [draw, ctx]);

  return { canvasRef, draw: setDraw };
};

export default useCanvas;
