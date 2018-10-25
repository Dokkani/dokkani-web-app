import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormControl, FormControlLabel, Input, Button} from '@material-ui/core';
import './SignUpPage.css';

const styles = theme => ({
  loginInput: {
    minWidth: 500
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
      <Grid  container spacing={24} alignItems='center' justify='space-around' direction="column">
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="left"
            style={{
              marginTop: 20,
              marginBottom: 20,
              
            }}
            color="inherit"
            className="sign-up-heading"
          >
            Sign Up
          </Typography>
        </Grid>
        <Grid  item xs={12}>
          <Input className="input" placeholder="First Name"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input className="input" placeholder="Last Name"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input className="input" placeholder="Email"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input className="input" placeholder="Username"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input className="input" placeholder="Password"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input className="input" placeholder="Address"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input className="input" placeholder="Phone"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="sign-up-submit"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUpPage);