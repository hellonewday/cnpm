import React, { useState } from "react";
// import "./App.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Icon
import HomeIcon from "@material-ui/icons/Home";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import InfoIcon from "@material-ui/icons/Info";

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
        if (selected.split("/").length === 2) {
          window.location.reload();
        }
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

        <NavItem eventKey="chapters">
          <NavIcon>
            <LibraryBooksIcon className={classes.icon} />
          </NavIcon>
          <NavText>Tổng hợp kiến thức</NavText>
          <NavItem eventKey="chapters/1">
            <NavText>Chương 1</NavText>
          </NavItem>
          <NavItem eventKey="chapters/2">
            <NavText>Chương 2</NavText>
          </NavItem>
          <NavItem eventKey="chapters/3">
            <NavText>Chương 3</NavText>
          </NavItem>
          <NavItem eventKey="chapters/4">
            <NavText>Chương 4</NavText>
          </NavItem>{" "}
          <NavItem eventKey="chapters/5">
            <NavText>Chương 5</NavText>
          </NavItem>
        </NavItem>

        <NavItem eventKey="contribute">
          <NavIcon>
            <AccessibilityNewIcon className={classes.icon} />
          </NavIcon>
          <NavText>Đóng góp kiến thức</NavText>
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
          <NavText>Giải đáp ngân hàng</NavText>
        </NavItem>
        <NavItem eventKey="about">
          <NavIcon>
            <InfoIcon className={classes.icon} />
          </NavIcon>
          <NavText>Về sản phẩm</NavText>
        </NavItem>
        <hr />
        <NavItem eventKey="blog">
          <NavIcon>
            <CodeIcon className={classes.icon} />
          </NavIcon>
          <NavText>My Blog</NavText>
        </NavItem>
        <NavItem eventKey="github">
          <NavIcon>
            <GitHubIcon className={classes.icon} />
          </NavIcon>
          <NavText>Github</NavText>
        </NavItem>
      </Nav>
    </SideNav>
  );
};

export default SideBar;
