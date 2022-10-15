import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useFormContext } from "react-hook-form";

interface Props {
  disabled: boolean;
  name: string;
  label: string;
}
export default function FileUploadField({ disabled, name, label }: Props) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const upload: File | null = watch(name) ? watch(name)[0] : null;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: "25%",
        padding: "8px",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        variant="body2"
        component="label"
        htmlFor={`${name} upload`}
        color={errors[name] ? "red" : "InactiveCaptionText"}
        gutterBottom
      >
        {errors[name]?.message.toString() ?? label}
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
        color={
          (upload && "success") || (!!errors[name] && "error") || "secondary"
        }
      >
        {upload?.name?.substring(0, 10) ?? "Add Attachment"}
        <input
          hidden
          disabled={disabled}
          id={`${name} upload`}
          name={name}
          type="file"
          accept="image/*"
          {...register(name)}
        />
      </Button>
    </div>
  );
}
