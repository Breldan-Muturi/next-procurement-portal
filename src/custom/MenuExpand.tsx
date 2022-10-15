import { styled } from "@mui/material/styles";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface SidebarIconProps extends SvgIconProps {
  open: boolean;
}
const SidebarIcon = styled(ExpandMore, {
  shouldForwardProp: (prop) => prop !== "open",
})<SidebarIconProps>(({ theme, open }) => ({
  color: "white",
  transform: "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  ...(open && {
    transform: "rotate(0deg)",
  }),
}));

export default SidebarIcon;
