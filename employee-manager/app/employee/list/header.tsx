"use client";
import GridView from "@/public/images/GridView.svg";
import ListView from "@/public/images/ListView.svg";
import theme from "@/app/styles/theme";
import IconButton from "@/app/components/atoms/iconButton.tsx/iconButton";

import Stack from "@mui/material/Stack";
import TextButton from "@/app/components/atoms/textButton";

export default function EmployeeListHeader() {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        justifyContent={"flex-end"}
        margin={"20px 3%"}
        alignItems={"center"}
      >
        <TextButton
          text="Add Employee"
          background={theme.primaryMain}
          onClick={() => console.log("ssssssee")}
        />
        <IconButton
          src={GridView}
          background={theme.primaryMain}
          onClick={() => console.log("ssssssss")}
        />
      </Stack>
    </>
  );
}
