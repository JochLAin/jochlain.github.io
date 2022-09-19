import type { ForwardRefRenderFunction, SyntheticEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { createRef, forwardRef, useRef } from "react";
import useMain from "@assets/hooks/useMain";
import useTypeWriting from "@assets/hooks/useTypeWriting";

export default function Hero() {
    const content = useTypeWriting(['Web', 'Fullstack', 'Backend', 'Frontend', 'Symfony', 'React', 'HTML / CSS / JS', 'PHP', 'SCSS']);
    const main = useMain();
    const refDialog = createRef<HTMLDialogElement>();

    const onClickZoom = (evt: SyntheticEvent<HTMLAnchorElement>) => {
        evt.preventDefault();
        if (refDialog.current) {
            refDialog.current.showModal();
        }
    };

    return <>
        <span className="navigation-hint-top">
            Navigation
            <FontAwesomeIcon icon={solid('share')} transform="flip-h rotate--90" />
        </span>
        <article>
            <h1>Jocelyn Faihy</h1>
            <h2>
                <span className="type-writing">{content}</span>
                <span>{main.translate('hero.title', {}, 'hero')}</span>
            </h2>
            <blockquote>
                {main.translate('hero.quote', {}, 'hero')}
            </blockquote>
            <footer>
                <a href="https://www.linkedin.com/in/jocelyn-faihy-421ba885/" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={brands('linkedin')} size="2x" fixedWidth />
                </a>
                <a href="https://github.com/jochlain" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={brands('github')} size="2x" fixedWidth />
                </a>
                <a href="https://www.npmjs.com/~jochlain" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={brands('npm')} size="2x" fixedWidth />
                </a>
                <hr />
                <a href="/cv.pdf" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={solid('file-pdf')} size="2x" fixedWidth />
                </a>
                <a href="#me" title={main.translate('help.pdf')} onClick={onClickZoom}>
                    <FontAwesomeIcon icon={solid('magnifying-glass')} size="2x" fixedWidth />
                </a>
            </footer>
            <Viewer ref={refDialog} />
        </article>
        <a href="#about" className="navigation-hint-bottom" title={main.translate('next')}>
            <FontAwesomeIcon icon={regular('angle-down')} size="2x" fixedWidth />
        </a>
    </>;
}

const Viewer = forwardRef(function Dialog(props: any, ref: any) {
    const main = useMain();
    const refCanvas = createRef<HTMLCanvasElement>();
    const refContext = useRef<{ ctx: CanvasRenderingContext2D|null, x: number, y: number, zoom: number }|null>(null);
    const refImage = createRef<HTMLImageElement>();

    const onClickClose = (evt: SyntheticEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        ref.current?.close();
    }

    const onMouseMove = (evt: SyntheticEvent<HTMLImageElement, MouseEvent>) => {
        const size = 400;
        const glassZoom = 1.25;

        if (refImage.current && refCanvas.current) {
            if (!refContext.current) {
                const { x, y, height } = refImage.current.getBoundingClientRect();
                const zoom = height / refImage.current.naturalHeight;
                refContext.current = { ctx: null, x, y, zoom };
            }
            if (refContext.current && !refContext.current?.ctx) {
                refContext.current = Object.assign({}, refContext.current, {
                    ctx: refCanvas.current.getContext('2d'),
                });
            }
            if (refContext.current?.ctx) {
                const { pageX, pageY } = evt.nativeEvent;
                const { ctx, x, y, zoom } = refContext.current;
                ctx.fillStyle = '#FFF';
                ctx.fillRect(0, 0, size, size);
                ctx.drawImage(refImage.current, (pageX - x) / zoom - (size / glassZoom / 2), (pageY - y) / zoom - (size / glassZoom / 2), size / glassZoom, size / glassZoom, 0, 0, size, size);
                refCanvas.current.style.left = `${pageX - x}px`;
                refCanvas.current.style.top = `${pageY - y}px`;
            }
        }
    };

    return <dialog ref={ref}>
        <div className="content">
            <img ref={refImage} src="/cv.png" alt="Curriculum vitae" onMouseMove={onMouseMove} />
            <canvas ref={refCanvas} height={300} width={300} />
        </div>
        <button className="close" title={main.translate('close')} onClick={onClickClose}>
            <FontAwesomeIcon icon={regular('xmark')} fixedWidth />
        </button>
    </dialog>;
});