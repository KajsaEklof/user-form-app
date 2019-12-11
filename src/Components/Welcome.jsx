import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Welcome extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Header headerTitle={"Welcome"} />
          <div className="main">
          <h1>Hello</h1>
<p>This app has been built with material ui</p>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={this.continue}
          >
           Get started
          </Button>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


export default Welcome;
