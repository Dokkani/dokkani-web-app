import React from 'react';
import PropTypes from 'prop-types';
import { withStles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import  ButtonAppBar from '../ButtonAppBar';
import { FormControl, FormControlLabel, Input } from '@material-ui/core';

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
  }

  render() {
    return (
      <Grid container spacing={24}>
        <form>
          <FormControl>
            <Input placeholder="First Name"></Input>
          </FormControl>
        </form>
      </Grid>
    );
  }
}

export default SignUpPage;