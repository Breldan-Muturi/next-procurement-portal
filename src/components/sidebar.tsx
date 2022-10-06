import React, { useState } from "react";
import Drawer from "../custom/Drawer";
import useSidebarNav from "../hooks/useSidebarNav";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import * as icons from "@mui/icons-material";
import SidebarIcon from "../custom/SidebarIcon";
import { SideMenuProps } from "../types";
import { useRouter } from "next/router";
import { grey } from "@mui/material/colors";
import theme from "../theme";

export default function Sidebar() {
  const [open, setOpen] = useState<Boolean>(true);
  const [expanded, setExpanded] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);
  const menuItems = useSidebarNav(Boolean(isAdmin));
  const router = useRouter();
  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { backgroundColor: theme.palette.primary.main } }}
      open={Boolean(open)}
    >
      <List>
        {menuItems.map(({ label, icon, path }: SideMenuProps) => {
          const Icon = icons[icon];
          return (
            <ListItemButton
              key={path}
              onClick={() => router.push("/registration")}
              selected={router.pathname === path}
            >
              <Tooltip arrow title={label}>
                <ListItemIcon sx={{ color: theme.palette.common.white }}>
                  <Icon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  variant: "body1",
                  color: "white",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
      <ListItem sx={{ mt: "auto" }} disablePadding>
        <ListItemButton onClick={() => setOpen((prev) => !prev)}>
          <Tooltip arrow title={open ? "Close Sidebar" : "Open Sidebar"}>
            <ListItemIcon sx={{ color: theme.palette.common.white }}>
              <SidebarIcon open={Boolean(open)} />
            </ListItemIcon>
          </Tooltip>
          <ListItemText
            primary={open ? "Close Sidebar" : "Open Sidebar"}
            primaryTypographyProps={{
              variant: "body1",
              color: "white",
            }}
          />
        </ListItemButton>
      </ListItem>
    </Drawer>
  );
}
