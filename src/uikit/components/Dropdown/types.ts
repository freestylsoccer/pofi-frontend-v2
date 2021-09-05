export type Position = "top" | "top-right" | "bottom" | "other";

export interface PositionProps {
  position?: Position;
}

export interface DropdownProps extends PositionProps {
  target: React.ReactElement;
}
