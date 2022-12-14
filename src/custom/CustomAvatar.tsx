import { styled } from "@mui/material/styles";
import Avatar, { AvatarProps } from "@mui/material/Avatar";

interface CustomAvatarProps extends AvatarProps {
  size?: string;
}

const CustomAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== "size",
})<CustomAvatarProps>(({ theme, size }) => ({
  backgroundColor: theme.palette.primary.light,
  width: theme.spacing(5),
  height: theme.spacing(5),
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: theme.palette.primary.light,
  ...(size === "small" && {
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderWidth: "1px",
  }),
  ...(size === "large" && {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderWidth: "2px",
  }),
}));

export default CustomAvatar;
