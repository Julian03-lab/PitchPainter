"use client";

import useDraw from "@/utils/hooks/useDraw";

export default function Home() {
  const { canvasRef, onMouseDown, clearCanvas } = useDraw(draw);

  function draw({ ctx, currentPoint, prevPoint }: Draw) {
    const color = "#000";
    const lineWidth = 1;

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center bg-clip-text bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 text-transparent mb-2">
          PitchPainter
        </h1>
        <p className="text-xl text-center">
          Draw with your friends in real-time!
        </p>
      </div>
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        className="border-2 border-gray-500 mt-2 bg-white"
        width="500"
        height="500"
      />

      <button
        onClick={clearCanvas}
        type="button"
        className="bg-gray-500 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Clear
      </button>
    </main>
  );
}
