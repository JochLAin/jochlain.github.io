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
// export const DEFAULT_DATA: (string|undefined)[][][] = [[Array(DEFAULT_WIDTH * DEFAULT_HEIGHT)]];

const DAMIER: (string|undefined)[] = [
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
];

const REVERSE_DAMIER: (string|undefined)[] = [
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
];

const LAYER_0_0: (string|undefined)[] = [
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
];

const LAYER_0_1: (string|undefined)[] = [
    undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF',
    '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined,
    undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF',
    '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined,
    undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF',
    '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined,
    undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF',
    '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined,
    undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF',
    '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined,
];

const LAYER_1_0: (string|undefined)[] = [
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
    undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined, '#000',
    '#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,'#000', undefined,
];

const LAYER_1_1: (string|undefined)[] = [
    '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined,
    undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF',
    '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined,
    undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF',
    '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined,
    undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF',
    '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined,
    undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF',
    '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined,
    undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF', undefined, '#FFF',
];

export const DEFAULT_DATA: (string|undefined)[][][] = [
    [LAYER_0_0, LAYER_0_1],
    [LAYER_1_0, LAYER_1_1],
];
