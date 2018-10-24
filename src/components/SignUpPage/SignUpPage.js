import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import  ButtonAppBar from '../ButtonAppBar';
import { FormControl, FormControlLabel, Input } from '@material-ui/core';
import './SignUpPage.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
})
class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      user_name: null,
      password: null,
      email: null,
      address: null,
      phone: null,
      location: null,
      latitude: null,
      longitude: null
    };
    this.classes = props.classes;
  }

  render() {
    return (
      <div className={this.classes.root}>
        <Grid container className="container" spacing={16} alignItems='center' justify='center' direction="row">
          <Grid item xs={6}>
            <Input className="input" placeholder="First Name"></Input>
          </Grid>
          <Grid item xs={6}>
            <Input className="input" placeholder="Last Name"></Input>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SignUpPage);