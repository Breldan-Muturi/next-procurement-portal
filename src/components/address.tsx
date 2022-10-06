import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface Props {}

export default function Address({}: Props) {
  return (
    <Box component="section" sx={{ p: 3, m: 3, border: "1px solid black" }}>
      <Typography variant="h5" component="h3" gutterBottom>
        Address and Contact Details
      </Typography>
      <Divider sx={{ borderColor: "#828282" }} />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25%" },
          display: "flex",
          justifyContent: "space-between",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      <Typography variant="h5" component="h3" gutterBottom>
        Contact Person Information
      </Typography>
      <Divider sx={{ borderColor: "#828282" }} />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25%" },
          display: "flex",
          justifyContent: "space-between",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </Box>
  );
}
