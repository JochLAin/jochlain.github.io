import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {createRef, forwardRef, SyntheticEvent, useRef} from "react";
import useMain from "@assets/hooks/useMain";

export default forwardRef(function ViewerDialog(props: any, ref: any) {
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
    <button className="close" title={main.translate('Close')} onClick={onClickClose}>
      <FontAwesomeIcon icon={regular('xmark')} fixedWidth />
    </button>
  </dialog>;
});