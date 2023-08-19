import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from 'react-router-dom';

export default function Navbar({ children }) {
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: faChartPie,
    },
    {
      path: "/transactions",
      name: "Transactions",
      icon: faTags,
    },
    {
      path: "/schedule",
      name: "Schedule",
      icon: faCalendar,
    },
    {
      path: "/users",
      name: "Users",
      icon: faCircleUser,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: faGear,
    },
  ];
  return (
    <div className="d-flex" style={{ height: "100%" }}>
      <div
        className=" col-2 mx-4 p-5 d-flex justify-content-between flex-column"
        style={{ background: "black", color: "white", height: "90%" , borderRadius:'30px' ,position:'fixed',minWidth:'250px'}}
      >
        <div>
          <div style={{fontSize:'36px', fontWeight:600 , marginBottom:"25px"}}>Board.</div>

          <div>
            {menuItems.map((menuItem,index) => (
              <NavLink to={menuItem.path} key={index} activeclassName="active" className="d-flex justify-content-start text-center align-items-center my-4 navStyle" style={{fontSize:'18px'}}>
                {" "}
                <FontAwesomeIcon icon={menuItem.icon} style={{marginRight:"15px"}}/>
                {menuItem.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <p className="">Help</p>
          <p className="">Contact Us</p>
        </div>
      </div>
      <div
        className=" col-2 mx-4 p-5 d-flex justify-content-between flex-column"
        style={{ height: "100%" , borderRadius:'30px' }}
      ></div>
      <div className="col mx-2">{children}</div>
    </div>
  );
}
