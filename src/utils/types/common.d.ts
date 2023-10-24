type Draw = {
  ctx: CanvasRenderingContext2D;
  currentPoint: Point;
  prevPoint: Point | null;
};

type Point = {
  x: number;
  y: number;
};

type Canvas = {
  lineWidth?: number;
  color?: string;
  canvasWidth?: number;
  canvasHeight?: number;
  canvasStyle?: string;
  buttonRef: React.RefObject<HTMLButtonElement>;
};
