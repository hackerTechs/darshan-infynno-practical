import React from "react";
import { Button, Card, Row, Col, SideNavItem, Icon, SideNav } from "react-materialize";

function SideNavBar({ title, image }) {
  return (
    <>
      <style>
        {`
            #root > #SideNav {
              z-index: 9998 !important;
            }
          `}
      </style>
      <SideNav
        id="SideNav"
        options={{
          draggable: true,
        }}
        // trigger={<Button node="button">SIDE NAV DEMO</Button>}
      >
        <SideNavItem href="#!icon" icon={<Icon>movie</Icon>}>
          Movies
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem href="#!second" icon={<Icon>logout</Icon>}>Logout</SideNavItem>
      </SideNav>
    </>
  );
}

export default SideNavBar;
