import React, { cloneElement, useMemo, useEffect, createRef, useState } from "react";
import Classnames from 'classnames';
import { HEXAGONS } from "../../constant";

const HEXAGON_COMPONENTS = [...Object.values(HEXAGONS)];

export default function HexagonGrid() {
    const ref_grid = createRef<HTMLDivElement>();
    const [hexagons, setHexagons] = useState([cloneElement(HEXAGON_COMPONENTS[0], { key: 'hexagon-init' })]);

    const debounce = useMemo(() => {
        let debounce_timeout: number|undefined;
        return (callback: Function, delay: number = 150) => {
            if (debounce_timeout) window.clearTimeout(debounce_timeout);
            debounce_timeout = window.setTimeout(callback, delay);
        };
    }, []);

    useEffect(() => {
        const onResize = () => {
            debounce(() => {
                if (!ref_grid.current) return;

                const { clientHeight: client_height, clientWidth: client_width } = ref_grid.current;
                const hexagon = ref_grid.current.querySelector('.hexagon');
                if (!hexagon) return;

                const style = window.getComputedStyle(hexagon);
                const style_font_size = Number(style.getPropertyValue('font-size').replace(/(r?em|px)$/, ''));
                const style_border_height = Number(style.getPropertyValue('--hexagon-border-height').replace(/(r?em|px)$/, ''));
                const style_gutter = Number(style.getPropertyValue('--hexagon-height').replace(/(r?em|px)$/, ''));
                const style_height = Number(style.getPropertyValue('--hexagon-height').replace(/(r?em|px)$/, ''));
                const style_width = Number(style.getPropertyValue('--hexagon-width').replace(/(r?em|px)$/, ''));

                const offset_y = style_border_height * style_font_size / 2;
                const hexagon_height = (style_height + style_border_height) * style_font_size + style_gutter * 2;
                const hexagon_width = style_width * style_font_size + style_gutter;

                const nb_hexagon = Math.floor(client_width / hexagon_width) * Math.floor((client_height - offset_y * 2) / hexagon_height);
                const tmp = [...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS, ...HEXAGON_COMPONENTS]
                    .slice(0, nb_hexagon);
                for (let idx = 1; idx < tmp.length; idx++) {
                    const rdm = Math.floor(Math.random() * idx);
                    [tmp[idx], tmp[rdm]] = [tmp[rdm], tmp[idx]];
                }

                setHexagons(tmp.map((hexagon) => cloneElement(hexagon, { key: `hexagon-${Math.random().toString(36).slice(2, 9)}` })));
            });
        };

        window.addEventListener('resize', onResize);
        setTimeout(onResize, 3000);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return <div ref={ref_grid} className="hexagon-grid">
        {hexagons}
        <div className={Classnames('hexagon-grid--loader fade', hexagons.length === 1 && 'show')}>
            <span className="fas fa-cog fa-spin" />
        </div>
    </div>;
}
