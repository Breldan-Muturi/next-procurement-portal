import React, { Dispatch, SetStateAction } from "react";
import { v4 } from "uuid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { FileUpload } from "../types";

interface Props {
  upload: FileUpload;
  setFile: Dispatch<SetStateAction<FileUpload>>;
  label: string;
}

export default function FileUploadField({ upload, setFile, label }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: "25%",
        paddingLeft: "8px",
        paddingRight: "8px",
        justifyContent: "flex-start",
      }}
    >
      <Typography variant="body2" color="InactiveCaptionText" gutterBottom>
        {label}
      </Typography>
      <Button
        fullWidth
        startIcon={
          <Tooltip arrow title={upload ? "Replace attachment" : label}>
            {upload ? <HighlightOffIcon /> : <UploadFileIcon />}
          </Tooltip>
        }
        variant="outlined"
        component="label"
        color={upload ? "success" : "secondary"}
      >
        {upload?.file.name.substring(0, 10) ?? "Add Attachment"}
        <input
          hidden
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFile({
              path: v4(),
              contentType: e.target.files[0].type,
              file: e.target.files[0],
            })
          }
        />
      </Button>
    </div>
  );
}
