"use client";

import useDraw from "@/utils/hooks/useDraw";
import { useEffect } from "react";

const Canvas = ({
  lineWidth = 10,
  color = "#000",
  canvasWidth = 800,
  canvasHeight = 600,
  canvasStyle,
  buttonRef,
}: Canvas) => {
  const { canvasRef, onMouseDown, clearCanvas } = useDraw(draw);

  function draw({ ctx, currentPoint, prevPoint }: Draw) {
    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currentPoint.x, currentPoint.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(currentPoint.x, currentPoint.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  useEffect(() => {
    if (!buttonRef.current) return;

    buttonRef.current.addEventListener("click", clearCanvas);

    const clear = () => {
      buttonRef.current?.removeEventListener("click", clearCanvas);
    };
    return () => {
      clear();
    };
  }, [buttonRef, clearCanvas]);

  return (
    <canvas
      onMouseDown={onMouseDown}
      ref={canvasRef}
      className={canvasStyle}
      width={canvasWidth}
      height={canvasHeight}
    />
  );
};

export default Canvas;
