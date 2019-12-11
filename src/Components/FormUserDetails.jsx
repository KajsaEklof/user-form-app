import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Header from "./Header";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {});
  };

  render() {
    const { values, handleChange, handleChecked } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Header headerTitle={"Enter your user details"} />
          <ValidatorForm ref="form" instantValidate={true}>
            <div className="main">
              <TextValidator
                label="First name"
                name="firstName"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                label="Last name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                label="Email"
                onChange={handleChange("email")}
                name="email"
                value={values.email}
                hintText="Enter your email"
                floatingLableText="RTsa"
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              />

              <FormControl style={styles.form}>
                <InputLabel>Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  defaultValue={values.gender}
                  onChange={handleChange("gender")}
                  displayEmpty
                >
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Prefer not to say">
                    Prefer not to say
                  </MenuItem>
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={styles.button}
                onClick={this.continue}
              >
                Continue
              </Button>
            </div>
          </ValidatorForm>
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
