import React, { forwardRef } from "react";
import Image from "next/image";
import { IconButtonStyles } from "./iconButton.styles";
export type IconButtonProps = {
  src: string;
  background: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = forwardRef(
  (
    { src, background, ...props }: IconButtonProps,
    bref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={bref}
        {...props}
        style={{
          background,
          ...IconButtonStyles,
        }}
      >
        <Image src={src} alt="Button" />
      </button>
    );
  }
);
IconButton.displayName = "IconButton";

export default IconButton;
