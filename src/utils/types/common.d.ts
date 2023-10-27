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

type Message = {
  message: string;
  sender: string;
  timestamp?: string;
};

type User = {
  username: string;
  presence_ref: string;
  guessed: boolean;
  points: number;
};
