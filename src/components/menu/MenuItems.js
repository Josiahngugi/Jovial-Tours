import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AnimationIcon from "@mui/icons-material/Animation";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
const MenuItems = [
  {
    id: 0,
    label: "Africa",
    icon: <AcUnitIcon />,
    route: "africa"
  },
  {
    id: 1,
    label: "America",
    icon: <AnimationIcon />,
    route: "america"
  },
  {
    id: 2,
    label: "Europe",
    icon: <ApartmentIcon />,
    route: "europe"
  },
  {
    id: 3,
    label: "Asia",
    icon: <AppRegistrationIcon />,
    route: "asia"
  }
];

export default MenuItems;
