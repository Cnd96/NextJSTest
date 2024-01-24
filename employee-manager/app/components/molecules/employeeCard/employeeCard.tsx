"use client";
import React from "react";
import { useDispatch } from "react-redux";
import Man from "@/public/images/Man.svg";
import Delete from "@/public/images/Delete.svg";
import IconButton from "../../atoms/iconButton.tsx/iconButton";
import theme from "@/app/styles/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

import { AppDispatch } from "@/app/store";
import { deleteEmployeeAsync } from "@/app/store/employee.slice";

export interface EmployeeCardProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: "M" | "F";
  imageSrc: string;
}

const EmployeeCard = ({
  id,
  name,
  email,
  phone,
  gender,
  imageSrc,
}: EmployeeCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const smallScreen = useMediaQuery("(max-width:500px)");
  const mediumScreen = useMediaQuery("(max-width:700px)");
  const largeScreen = useMediaQuery("(max-width:900px)");
  const GridStyles = {
    width: smallScreen
      ? "calc(50%)"
      : mediumScreen
      ? "calc(33%)"
      : largeScreen
      ? "calc(25%)"
      : "calc(20%)",
    display: "flex",
    justifyContent: "center",
    margin: "15px 0",
  };
  return (
    <div style={GridStyles}>
      {/* TODO box shadow color variable */}
      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          width: "140px",
          borderRadius: "5px",
          margin: "0 10px",
        }}
      >
        <img
          src={imageSrc}
          alt="Avatar"
          width={"100%"}
          style={{ borderRadius: "5px 5px 0 0" }}
        ></img>
        <div
          style={{
            padding: "2px 5px",
            fontSize: "9px",
            fontWeight: "700",
          }}
        >
          <p>{name}</p>
          <p style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
            {email}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>{phone}</p>
              <p>{gender === "F" ? "Female" : "Male"}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton
                src={Delete}
                background={theme.red}
                onClick={() => dispatch(deleteEmployeeAsync(id))}
              />
              <Link href={`/employee/edit/${id}`}>
                <IconButton
                  src={Man}
                  background={theme.green}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
