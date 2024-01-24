import theme from "@/app/styles/theme";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

export interface DropDownWithProps {
  title: string;
  options: string[];
  name: string;
}

const DropDownWithLabel = ({ title, options, name }: DropDownWithProps) => {
  const { register, watch } = useFormContext();
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
        <FormControl
          sx={{
            "& .MuiInputBase-input": {
              height: "20px",
              borderRadius: "unset",
              background: "#F0F0F0",
              borderBottom: "2px solid #808080",
            },
          }}
        >
          <Select
            sx={{
              "& .MuiInputBase-input": {
                height: "20px",
                minHeight: "20px",
                padding: "2px 4px",
                minWidth: "100px",
              },
            }}
            {...register(name)}
            id={name}
            name={name}
            value={watch(name)}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default DropDownWithLabel;
