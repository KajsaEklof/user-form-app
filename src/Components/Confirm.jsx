import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";

export default class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    console.log(this.props.values);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
          <Header headerTitle={"Confirm that your details are correct"} />
          <div className="main">
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
                secondaryText={termsandconditions ? "I agree to user terms and conditions" : "I have not agreed to the user terms and conditions" }
              />
              <ListItem
                primaryText="Emails about updates"
                secondaryText={subscription ? "I would like emails about updated" : "I would not like emails about updates"}
              />
            </List>
            <br />
            <RaisedButton
              label="Confirm"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />

            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
