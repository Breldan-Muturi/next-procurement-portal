import { SideMenuProps } from "../types";

const useSidebarNav = (isAdmin: boolean) => {
  let menuItems: SideMenuProps[] = [
    {
      label: "Dashboard",
      path: "/",
      icon: "Dashboard",
    },
    {
      label: "Registration",
      path: "/registration",
      icon: "FileCopy",
    },
    {
      label: "Payments",
      path: "/payments",
      icon: "Payment",
    },
    {
      label: "Organization",
      path: "/organizations",
      icon: "Business",
    },
    {
      label: "New organization",
      path: "/new-organization",
      icon: "CreateNewFolder",
    },
    {
      label: "Custom Application",
      path: "/custom-application",
      icon: "Description",
    },
    {
      label: "Completed Courses",
      path: "/completed-courses",
      icon: "VerifiedUserSharp",
    },
    ,
    {
      label: "My profile",
      path: "/my-profile",
      icon: "AccountBoxSharp",
    },
  ];
  if (isAdmin) {
    menuItems
      .splice(5, 1, {
        label: "New Course",
        path: "/course",
        icon: "PostAdd",
      })
      .filter((filteredMenu) => filteredMenu.path !== "/custom-application");
  }
  return menuItems;
};

export default useSidebarNav;
