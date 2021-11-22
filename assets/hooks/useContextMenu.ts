import { useCallback, useEffect, useState } from "react";

export default function useContextMenu(): [number, number, boolean, (event: Event) => void] {
    const [shown, setShown] = useState<boolean>(false);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const handleContextMenu = useCallback((event) => {
        event.preventDefault();
        setX(event.pageX);
        setY(event.pageY);
        setShown(true);
    }, [setX, setY, setShown]);

    const handleMouseUp = useCallback(() => {
        if (shown) setShown(false);
    }, [shown, setShown]);

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseUp]);

    return [x, y, shown, handleContextMenu];
}
