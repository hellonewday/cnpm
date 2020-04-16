import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-haspopup="true"
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Trang chủ
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/contribute"
              >
                Cống hiến tri thức
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/search"
              >
                Tìm kiếm tri thức
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/training"
              >
                Ôn luyện trắc nghiệm
              </Link>
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Nhập môn Công nghệ phần mềm - PTIT
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
