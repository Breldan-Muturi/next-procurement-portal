import { styled } from "@mui/material/styles";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface SidebarIconProps extends SvgIconProps {
  open: boolean;
}
const SidebarIcon = styled(ArrowCircleLeftOutlinedIcon, {
  shouldForwardProp: (prop) => prop !== "open",
})<SidebarIconProps>(({ theme, open }) => ({
  transform: "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  ...(open && {
    transform: "rotate(0deg)",
  }),
}));

export default SidebarIcon;
