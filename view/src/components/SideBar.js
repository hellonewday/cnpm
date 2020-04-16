import React, { useState } from "react";
// import "./App.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import HomeIcon from "@material-ui/icons/Home";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginTop: 12,
    fontSize: 30,
  },
}));
const SideBar = ({ dissapear }) => {
  const [select, setSelect] = useState("home");
  const classes = useStyles();
  const history = useHistory();
  return (
    <SideNav
      className={dissapear}
      style={{ backgroundColor: "#1a237e" }}
      onSelect={(selected) => {
        setSelect(selected);
        history.push(`/${selected}`);
      }}
    >
      <Toggle />
      <Nav selected={select}>
        <NavItem eventKey="">
          <NavIcon>
            <HomeIcon className={classes.icon} />
          </NavIcon>
          <NavText>Trang chủ</NavText>
        </NavItem>

        <NavItem eventKey="contribute">
          <NavIcon>
            <AccessibilityNewIcon className={classes.icon} />
          </NavIcon>
          <NavText>Cống hiến tri thức</NavText>
        </NavItem>
        <NavItem eventKey="search">
          <NavIcon>
            <LiveHelpIcon className={classes.icon} />
          </NavIcon>
          <NavText>Tra cứu tri thức</NavText>
        </NavItem>

        <NavItem eventKey="training">
          <NavIcon>
            <MenuBookIcon className={classes.icon} />
          </NavIcon>
          <NavText>Luyện thi trắc nghiệm</NavText>
        </NavItem>
      </Nav>
    </SideNav>
  );
};

export default SideBar;
