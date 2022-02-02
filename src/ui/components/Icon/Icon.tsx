import React from "react";
import { ReactSVG } from "react-svg";

export const Icon = (props: Props) => {
  console.log(props);
  return (
    <>
      HOOOOOx
      <ReactSVG src={`/icons/${props.name}.svg`} />
    </>
  );
};

interface Props {
  name: string;
  size: string;
}

Icon.defaultProps = {};
