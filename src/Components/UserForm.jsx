import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import Welcome from "./Welcome";

export default class UserForm extends Component {
  state = {
    step: 0,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
    gender: "",
    termsandconditions: false,
    subscription: false,
    submitted: false
  };

  //Continue to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  firstStep = () => {
    this.setState({
      step: 0
    });
    console.log("first step ran");
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
      gender,
      termsandconditions,
      subscription,
      submitted
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
      gender,
      termsandconditions,
      subscription,
      submitted
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            handleChecked={this.handleChecked}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleChecked={this.handleChecked}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success values={values} firstStep={this.firstStep} />;
      default:
        return <Welcome nextStep={this.nextStep} />
    }
  }
}
