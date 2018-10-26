import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormControl, FormControlLabel, Input, Button} from '@material-ui/core';
import './SignUpPage.css';
import axios from 'axios';

// const styles = theme => ({
//   loginInput: {
//     minWidth: 500
//   }
// })
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
    // this.classes = props.classes;
    this.onInputChange = this.onInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitForm(event) {
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:5000/api/users/signup', this.state)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error);
      });
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
          <Input onChange={this.onInputChange} name="first_name" className="input" placeholder="First Name"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input onChange={this.onInputChange} name="last_name"className="input" placeholder="Last Name"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input onChange={this.onInputChange} name="email" className="input" placeholder="Email"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input onChange={this.onInputChange} name="user_name" className="input" placeholder="Username"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input onChange={this.onInputChange} name="password" className="input" placeholder="Password"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input onChange={this.onInputChange} name="address" className="input" placeholder="Address"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input onChange={this.onInputChange} name="phone" className="input" placeholder="Phone"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="sign-up-submit"
            onClick={this.submitForm}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default SignUpPage;