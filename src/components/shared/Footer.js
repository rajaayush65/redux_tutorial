import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      color="inherit"
      sx={{
        backgroundColor: "#1976d2",
        // display: "flex",
        // flexWrap: "wrap",
        // "& > :not(style)": {
        //   m: 1,
        //   width: 128,
        //   height: 30
        // },
        position: "static",
        bottom: 0,
        width:"100%",
      }}
    >
      <Typography
        variant="body2"
        component="div"
        sx={{
          color: "white",
          flexGrow: 1,
          textAlign: "center",
          padding: "10px"
        }}
      >
        Copyright &copy; 2022 Designed by Aayush Raj All rights reserved
      </Typography>
    </Box>
  );
}
