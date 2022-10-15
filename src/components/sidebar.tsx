import React, { useState } from "react";
import Drawer from "../custom/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import SidebarIcon from "../custom/SidebarIcon";
import { useRouter } from "next/router";
import theme from "../theme";
import { Collapse, Divider, ListSubheader, Typography } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Image from "next/image";
import MenuExpand from "../custom/MenuExpand";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

export default function Sidebar() {
  const [open, setOpen] = useState<Boolean>(true);
  const [expanded, setExpanded] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);
  const router = useRouter();
  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { backgroundColor: theme.palette.primary.main } }}
      open={Boolean(open)}
    >
      <List
        subheader={
          <ListSubheader
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              py: 1,
              bgcolor: "transparent",
              gap: 1,
            }}
          >
            <Image
              src="https://ncpwd.go.ke/wp-content/uploads/2021/04/imageedit_25_3597270380.png"
              alt="NCPWD Logo"
              width="80px"
              height="80px"
            />
            {open && (
              <Typography variant="button" color="white" sx={{ fontSize: 25 }}>
                NCPWD
              </Typography>
            )}
          </ListSubheader>
        }
      >
        <Divider sx={{ bgcolor: "white", mb: 1 }} />
        <ListItemButton
          selected={router.pathname === ""}
          onClick={() => router.push("/")}
        >
          <Tooltip arrow title="Dashboard">
            <ListItemIcon sx={{ color: theme.palette.common.white }}>
              <DashboardOutlinedIcon />
            </ListItemIcon>
          </Tooltip>
          <ListItemText
            primary="Dashboard"
            primaryTypographyProps={{
              variant: "body1",
              color: "white",
            }}
          />
        </ListItemButton>
        <ListItemButton
          selected={router.pathname === "newsuppliers"}
          onClick={() => router.push("/newsuppliers")}
        >
          <Tooltip arrow title="New Supplier Applications">
            <ListItemIcon sx={{ color: theme.palette.common.white }}>
              <DomainAddIcon />
            </ListItemIcon>
          </Tooltip>
          <ListItemText
            primary="New Supplier Applications"
            primaryTypographyProps={{
              variant: "body1",
              color: "white",
            }}
          />
        </ListItemButton>
        <ListItemButton
          selected={router.pathname === "registration"}
          onClick={() => router.push("/registration")}
        >
          <Tooltip arrow title="Registered Suppliers">
            <ListItemIcon sx={{ color: theme.palette.common.white }}>
              <PeopleAltIcon />
            </ListItemIcon>
          </Tooltip>
          <ListItemText
            primary="Registered Suppliers"
            primaryTypographyProps={{
              variant: "body1",
              color: "white",
            }}
          />
        </ListItemButton>
        {Boolean(open) && (
          <ListItemButton
            onClick={() =>
              setExpanded((prev) =>
                prev === "Opportunities" ? "" : "Opportunities"
              )
            }
          >
            <Tooltip
              arrow
              title={`${
                expanded === "Opportunities" ? "Close" : "Open"
              } Opportunities Menu`}
            >
              <ListItemIcon sx={{ color: theme.palette.common.white }}>
                <FolderOpenIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText
              primary="Opportunities"
              primaryTypographyProps={{
                variant: "body1",
                color: "white",
              }}
            />
            <MenuExpand open={expanded === "Opportunities"} />
          </ListItemButton>
        )}
        <Collapse
          in={expanded === "Opportunities" || !Boolean(open)}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItemButton sx={Boolean(open) && { pl: 4 }}>
              <Tooltip arrow title="Add New Opportunities">
                <ListItemIcon sx={{ color: theme.palette.common.white }}>
                  <FolderOpenIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary="Add New Opportunities"
                primaryTypographyProps={{
                  variant: "body1",
                  color: "white",
                }}
              />
            </ListItemButton>
            <ListItemButton sx={Boolean(open) && { pl: 4 }}>
              <Tooltip arrow title="Active Opportunities">
                <ListItemIcon sx={{ color: theme.palette.common.white }}>
                  <FolderOpenIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary="Active Opportunities"
                primaryTypographyProps={{
                  variant: "body1",
                  color: "white",
                }}
              />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <Tooltip arrow title="Active Contracts">
            <ListItemIcon sx={{ color: theme.palette.common.white }}>
              <PeopleAltIcon />
            </ListItemIcon>
          </Tooltip>
          <ListItemText
            primary="Active Contracts"
            primaryTypographyProps={{
              variant: "body1",
              color: "white",
            }}
          />
        </ListItemButton>
        {Boolean(open) && (
          <ListItemButton
            onClick={() =>
              setExpanded((prev) => (prev === "Invoices" ? "" : "Invoices"))
            }
          >
            <Tooltip
              arrow
              title={`${
                expanded === "Invoices" ? "Close" : "Open"
              } Invoices Menu`}
            >
              <ListItemIcon sx={{ color: theme.palette.common.white }}>
                <TextSnippetOutlinedIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText
              primary="Invoices"
              primaryTypographyProps={{
                variant: "body1",
                color: "white",
              }}
            />
            <MenuExpand open={expanded === "Invoices"} />
          </ListItemButton>
        )}
        <Collapse
          in={expanded === "Invoices" || !Boolean(open)}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItemButton sx={Boolean(open) && { pl: 4 }}>
              <Tooltip arrow title="All Invoices">
                <ListItemIcon sx={{ color: theme.palette.common.white }}>
                  <TextSnippetOutlinedIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary="All Invoices"
                primaryTypographyProps={{
                  variant: "body1",
                  color: "white",
                }}
              />
            </ListItemButton>
            <ListItemButton sx={Boolean(open) && { pl: 4 }}>
              <Tooltip arrow title="Pending Invoices">
                <ListItemIcon sx={{ color: theme.palette.common.white }}>
                  <TextSnippetOutlinedIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary="Pending Invoices"
                primaryTypographyProps={{
                  variant: "body1",
                  color: "white",
                }}
              />
            </ListItemButton>
          </List>
        </Collapse>
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
