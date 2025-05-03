import React from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';

export default function Sidebar({ changeSelectedPage }) {
  return (
    <div>
      <div className="dashboard-sidebar">
        <ul className="sidebar-btn">
          {/* <li> <AccountBoxIcon/>Account</li> */}
          <li
            onClick={() => {
              changeSelectedPage("uploadCreation");
            }}
          > <AddBoxIcon/>
            Upload creation
          </li>
          {/* <li>Your creation</li> */}
          <li onClick={()=>{
            changeSelectedPage("viewAllModels")
          }}><ViewCompactIcon/> View 3D model</li>
        </ul>
      </div>
    </div>
  );
}
