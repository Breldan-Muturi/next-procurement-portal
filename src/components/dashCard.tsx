import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as icons from "@mui/icons-material";
import { blue } from "../theme";
import { DashInfo } from "../types";

export default function DashCard({
  title,
  linkText,
  link,
  icon,
  count,
}: DashInfo) {
  const Icon = icons[icon];
  return (
    <Paper>
      <Box
        p={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ height: 180 }}
      >
        <Grid
          container
          xs={12}
          direction="row"
          alignItems="center"
          columnSpacing={1}
        >
          <Grid xs={10}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid xs={2}>
            <Icon sx={{ fontSize: 30 }} />
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: 50, fontWeight: "bold" }}>
          {count}
        </Typography>
        <Link href={link}>
          <Typography
            color={blue}
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {linkText}
          </Typography>
        </Link>
      </Box>
    </Paper>
  );
}
