import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PersonIcon from "@mui/icons-material/Person";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import DiscountIcon from "@mui/icons-material/Discount";
import "../Components/Styles/Mobilehomestyles.css";
function ButtonTabs() {
  const [value, setvalue] = useState(0);
  return (
    <div className="BottomNav">
      {" "}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setvalue(newValue);
        }}
      >
        {" "}
        <BottomNavigationAction label="home" icon={<HomeIcon />} />{" "}
        <BottomNavigationAction
          label="My Bookings"
          icon={<AppSettingsAltIcon />}
        />{" "}
        <BottomNavigationAction label="Discount" icon={<DiscountIcon />} />{" "}
        <BottomNavigationAction label="GOs Care" icon={<HeadsetMicIcon />} />{" "}
      </BottomNavigation>{" "}
    </div>
  );
}
export default ButtonTabs;