import { Frame } from "../types/contexts/pixelart";

export const TOOL_EYE_DROPPER: string = 'eye_dropper';
export const TOOL_ERASER: string = 'eraser';
export const TOOL_FILL: string = 'fill';
export const TOOL_PENCIL: string = 'pencil';
export const TOOLS: string[] = [TOOL_ERASER, TOOL_EYE_DROPPER, TOOL_FILL, TOOL_PENCIL];

export const DEFAULT_COLOR: string = '#000';
export const DEFAULT_HEIGHT: number = 10;
export const DEFAULT_PALETTE: string[] = [];
export const DEFAULT_TOOL: string = TOOL_PENCIL;
export const DEFAULT_WIDTH: number = 10;
export const DEFAULT_HISTORY: [] = [];
export const DEFAULT_DATA: Frame[] = [[]];
