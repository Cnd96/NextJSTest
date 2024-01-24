import React from "react";
import Button from "@mui/material/Button";

export type ButtonProps = {
  text: string;
  background: string;
  onClick: React.MouseEventHandler;
};

const TextButton = ({ text, background, onClick }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      style={{
        background,
        height: "25px",
        fontSize: "14px",
        borderRadius: "15px",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
export default TextButton;
