import * as React from "react";

export type ButtonProps = {
  children: string;
  onClick?: React.MouseEventHandler;
  title?: string;
};

export function Button(props: ButtonProps) {
  return (
    <button className="Button" onClick={props.onClick} title={props.title}>
      {props.children}
    </button>
  );
}
