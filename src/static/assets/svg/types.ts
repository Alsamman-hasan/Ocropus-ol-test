import { CSSProperties, MouseEvent } from "react";

export interface ISvgProps {
  width?: string;
  height?: string;
  fill?: string;
  style?: CSSProperties;
  type?: "origin" | "alternative";
  stroke?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
