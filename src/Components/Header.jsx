import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
  render() {
    return (
      <AppBar color="primary" position="sticky">
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
        <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon fontSize="large" />
        </IconButton>
          <TypoGraphy variant="h5" color="inherit">
            {this.props.headerTitle}
          </TypoGraphy>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
