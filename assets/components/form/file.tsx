import type { SyntheticEvent } from "react";
import { createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { light } from "@fortawesome/fontawesome-svg-core/import.macro";

type FormFilePropTypes = {
  label?: string,
  name?: string,
  id?: string,
  children?: any,
  multiple?: boolean
  onChange?: (files: FileList|null) => void,
};

export default function FormFile(props: FormFilePropTypes) {
  const ref_input = createRef<HTMLInputElement>();

  const onFieldClick = (evt: SyntheticEvent<HTMLDivElement>) => {
    evt.preventDefault();
    evt.stopPropagation();
    ref_input.current?.click();
  };
  const onFieldDragEnter = (evt: SyntheticEvent<HTMLDivElement, DragEvent>) => {
    evt.preventDefault();
    evt.stopPropagation();
    evt.currentTarget.classList.add('dragging');
  };
  const onFieldDragLeave = (evt: SyntheticEvent<HTMLDivElement, DragEvent>) => {
    evt.preventDefault();
    evt.stopPropagation();
    evt.currentTarget.classList.remove('dragging');
  };
  const onFieldDragOver = (evt: SyntheticEvent<HTMLDivElement, DragEvent>) => {
    evt.preventDefault();
    evt.stopPropagation();
  };
  const onFieldDrop = (evt: SyntheticEvent<HTMLDivElement, DragEvent>) => {
    evt.preventDefault();
    evt.stopPropagation();
    props.onChange?.(evt.nativeEvent.dataTransfer?.files || null);
  };
  const onInputChange = (evt: SyntheticEvent<HTMLInputElement>) => {
    props.onChange?.(evt.currentTarget.files);
  };

  return <>
    <div className="form-file" onClick={onFieldClick} onDragEnter={onFieldDragEnter} onDragLeave={onFieldDragLeave} onDragOver={onFieldDragOver} onDrop={onFieldDrop}>
      <FontAwesomeIcon icon={light('file-arrow-up')} />
      {props.label || props.children}
    </div>
    <input
      ref={ref_input}
      type="file"
      name={props.name}
      id={props.id}
      multiple={props.multiple}
      onChange={onInputChange}
    />
  </>
}
