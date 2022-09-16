import { createContext, useContext } from "react";

export interface LayoutInterface {
  fullscreen?: boolean,
  getCoordinates: (id: string) => [number, number],
  goDown: (y: number) => void,
  goLeft: (y: number, x: number) => void,
  goRight: (y: number, x: number) => void,
  goUp: (y: number) => void,
  goTo: (y: number, x: number, smooth: boolean) => void,
  toggle: () => void,
}

export const LayoutContext = createContext<LayoutInterface>({
  getCoordinates: () => [0, 0],
  goDown: () => {},
  goLeft: () => {},
  goRight: () => {},
  goUp: () => {},
  goTo: () => {},
  toggle: () => {},
});

export default function useLayout(): LayoutInterface {
  return useContext(LayoutContext);
};
