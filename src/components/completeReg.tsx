import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function CompleteReg() {
  return (
    <Box
      justifyContent="center"
      gap={3}
      display="flex"
      py={3}
      alignItems="center"
      flexDirection="column"
    >
      <CheckCircleOutlineIcon color="success" sx={{ fontSize: 70 }} />
      <Typography align="center">
        Your Supplier information has been submitted Successfully. <br />
        Once you application is approved you will be able to participate in
        opportunities
      </Typography>
    </Box>
  );
}
