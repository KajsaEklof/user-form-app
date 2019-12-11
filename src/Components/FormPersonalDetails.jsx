import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Header from "./Header";

export default class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, handleChecked } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Header headerTitle={"Enter your personal details"} />
          <div className="main">
            <TextField
              hintText="Enter your occupation"
              floatingLableText="Occupation"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
            />
            <br />
            <TextField
              hintText="Enter your city"
              floatingLableText="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <TextField
              hintText="Enter a bio"
              floatingLableText="Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />
            <br />

            <FormControlLabel
              control={
                <Checkbox
                  checked={values.subscription}
                  onChange={handleChecked("subscription")}
                  value="I would like to subscribe to the newsletter"
                  color="secondary"
                />
              }
              label="I would like weekly emails about updates"
            />

            <br />
            <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
      

            <Button
            variant="contained"
            
              style={styles.button}
              onClick={this.back}
            >
            Back
            </Button>
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
