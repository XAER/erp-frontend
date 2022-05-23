import { Col, Drawer, Menu, Row } from "antd";
import React from "react";
import { UserContext } from "../context/AuthenticationProvider";

const AppHeader = () => {
  const { user } = React.useContext(UserContext);

  const [ currentSelected, setCurrentSelected] = React.useState("home");

  const [isVisible, setVisible] = React.useState(false);

  const toggleDrawer = () => setVisible(!isVisible);

  return (
    <>
      <Drawer
        title="Header"
        placement="left"
        closable={false}
        onClose={() => {
          console.log("onClose");
        }}
        visible={isVisible}
      >
        HEADER RESPONSIVE
      </Drawer>
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
        itemsToRender
      </Menu>
    </>
  );
};

export default AppHeader;
