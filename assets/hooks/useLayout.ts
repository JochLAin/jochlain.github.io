import { createContext, useContext } from "react";

export interface LayoutInterface {
  getCoordinates: (id: string) => [number, number],
  goDown: (y: number, smooth: boolean) => void,
  goLeft: (y: number, x: number, smooth: boolean) => void,
  goRight: (y: number, x: number, smooth: boolean) => void,
  goUp: (y: number, smooth: boolean) => void,
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
