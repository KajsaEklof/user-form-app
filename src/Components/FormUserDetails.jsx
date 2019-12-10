import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Header from "./Header";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleChecked } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Header headerTitle={"Enter your user details"} />

          <div className="main">
            <TextField
              hintText="Enter your first name"
              floatingLableText="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <TextField
              hintText="Enter your last name"
              floatingLableText="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <TextField
              hintText="Enter your email"
              floatingLableText="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            
            <FormControl style={styles.form}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                defaultValue={values.gender}
                onChange={handleChange("gender")}
                displayEmpty
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
              </Select>
              <FormHelperText>Choose your gender</FormHelperText>
            </FormControl>

            <FormControlLabel
              control={
                <Checkbox
                  checked={values.termsandconditions}
                  onChange={handleChecked("termsandconditions")}
                  value={"I have read the terms and conditions"}
                  color="primary"
                />
              }
              label="I have read the user terms and conditions"
            />

            <br />
            <RaisedButton
              primary={true}
              label="Continue"
              style={styles.button}
              onClick={this.continue}
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
  },
  form: {
    left: 0
  }
};

export default FormUserDetails;
