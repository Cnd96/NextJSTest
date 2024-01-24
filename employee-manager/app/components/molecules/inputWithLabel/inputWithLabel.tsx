import theme from "@/app/styles/theme";
import { TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

export interface InputWithLabelProps {
  title: string;
  name: string;
  error: string | undefined;
}

const InputWithLabel = ({ title, name, error }: InputWithLabelProps) => {
  const { register } = useFormContext();
  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <p>{title}</p>
        <TextField
          sx={{
            "& .MuiInputBase-input": {
              height: "20px",
              borderRadius: "unset",
              background: "#F0F0F0",
              padding: "2px 4px",
              borderBottom: "2px solid #808080",
            //   TODO color code
              fontSize: 16,
            },
          }}
          {...register(name)}
          id={name}
          name={name}
        />
      </div>
      {error && <p style={{ color: theme.error, fontSize: "9px" }}>{error}</p>}
    </div>
  );
};

export default InputWithLabel;
