import React, { CSSProperties, useEffect, useState } from "react";

const EFFECTS = ['rotate', 'scale', 'shine', 'turn'];
const MIN_DELAY = 1000;
const MAX_DELAY = 5000;
const MIN_DURATION = 3000;
const MAX_DURATION = 5000;

const getDuration = (): number => Math.floor(Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION);
const getDelay = (): number => Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY);

export interface HexagonProps {
    className?: string,
    style?: CSSProperties,
    name?: string,
    color: string,
    icon?: string,
    text?: string,
    children?: any,
}

export default function Hexagon(props: HexagonProps) {
    const [effect, setEffect] = useState<string>(EFFECTS[0]);
    const [duration, setDuration] = useState<number>(0);
    const [delay, setDelay] = useState<number>(0);

    useEffect(() => {
        let timeout: number;
        const refresh = (delay: number) => {
            if (timeout) window.clearTimeout(timeout);
            timeout = window.setTimeout(() => {
                const idx = Math.floor(Math.random() * EFFECTS.length)
                const duration = getDuration();
                const delay = getDelay();
                setEffect(EFFECTS[idx]);
                setDuration(duration);
                setDelay(delay);
                refresh(duration + delay);
            }, delay);
        };

        const delay = getDelay();
        setDelay(delay);
        refresh(delay);

        return () => {
            window.clearTimeout(timeout);
        }
    }, []);

    const style = {
        '--hexagon-animation-delay': `${delay}ms`,
        '--hexagon-animation-duration': `${duration}ms`,
        '--hexagon-color-background': props.color,
        '--hexagon-color-text': props.text || '#FFF',
    };

    return <div className={`hexagon ${effect}`} style={style as CSSProperties}>
        {props.icon && (
            <span className={`${props.icon} fa-fw`} />
        )}
        {props.children}
    </div>;
}
