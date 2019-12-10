import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import {Home, Book, AccountBox } from '@material-ui/icons';

class Navbar extends Component {
  render() {
    return (
      <List component="nav">
        <ListItem component="div">
          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              Home <Home color="secondary" fontSize="large" />
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              Posts <Book />
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              Contact <AccountBox />
            </TypoGraphy>
          </ListItemText>
        </ListItem>
      </List>
    );
  }
}

export default Navbar;
