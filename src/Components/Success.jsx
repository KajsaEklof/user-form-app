import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import Header from "./Header";
import Posts from "./Posts";
import Button from "@material-ui/core/Button";


export default class FormPersonalDetails extends Component {

  backToStart = e => {
    e.preventDefault();
    this.props.firstStep();
  };
  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        occupation,
        city,
        bio,
        gender,
        termsandconditions,
        subscription
      }
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Header headerTitle={"Thank you!"} />
          <div className="main">
            <h3>Your information has been submitted!</h3>
            <List>
              <ListItem primaryText="First Name" secondaryText={firstName} />
              <ListItem primaryText="Last Name" secondaryText={lastName} />
              <ListItem primaryText="Email" secondaryText={email} />
              <ListItem primaryText="City" secondaryText={city} />
              <ListItem primaryText="Occupation" secondaryText={occupation} />
              <ListItem primaryText="Bio" secondaryText={bio} />
              <ListItem primaryText="Gender" secondaryText={gender} />
              <ListItem
                primaryText="Terms and Conditions"
                secondaryText={termsandconditions}
              />
              <ListItem
                primaryText="Newsletter Subscription"
                secondaryText={subscription}
              />
            </List>
        
          <Button variant="contained" style={styles.button} onClick={this.backToStart}>
            Back to the start
          </Button>
          </div>
          <Posts />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  },
  form: {
    left: 0
  }
};