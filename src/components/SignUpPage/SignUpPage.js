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
      first_name: '',
      last_name: '',
      user_name: '',
      password: '',
      email: '',
      address: '',
      phone: '',
      location: '',
      latitude: '',
      longitude: '',
      isValid: true,
      errorMessage: ''
    };
    // this.classes = props.classes;
    this.onInputChange = this.onInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }
  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  validateInput() {
    for (let propt in this.state) {
      console.log(propt);
      if (propt !== 'location' && propt !== 'latitude' && propt !== 'longitude' && propt !== 'errorMessage') {
        console.log(propt, this.state[propt]);
        if (!this.state[propt]) {
          this.setState({
            isValid: false,
            errorMessage: 'Please fill out each field.'
          });
          return false;
        }
      }
    }
    this.setState({
      isValid: true
    });
    return true;
  }

  submitForm(event) {
    event.preventDefault();
    // console.log(this.state);
    if (this.validateInput()) {
      axios.post('http://localhost:5000/api/users/signup', this.state)
      .then(result => {
        console.log(result);
        this.setState({
          first_name: '',
          last_name: '',
          user_name: '',
          password: '',
          email: '',
          address: '',
          phone: '',
          location: '',
          latitude: '',
          longitude: '',
          errorMessage: '',
          isValid: true
        });
      })
      //this might not work
      //test this code
      .catch(error =>  {
        let errorData = error.response.data;
        let array = [];
        console.log(errorData);
        if (errorData) {
          for (let propt in errorData) {
            array.push(propt + ":" + errorData[propt]);
          }
          this.setState({
            errorMessage: array.join(' ')
          });
        }
      });
    }
    this.setState({
      isValid: false
    })
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
          <Input value={this.state.first_name} onChange={this.onInputChange} name="first_name" className="input" placeholder="First Name"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input value={this.state.last_name} onChange={this.onInputChange} name="last_name"className="input" placeholder="Last Name"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input value={this.state.email} onChange={this.onInputChange} name="email" className="input" placeholder="Email"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input value={this.state.user_name} onChange={this.onInputChange} name="user_name" className="input" placeholder="Username"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input value={this.state.password} onChange={this.onInputChange} name="password" className="input" placeholder="Password"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input value={this.state.address} onChange={this.onInputChange} name="address" className="input" placeholder="Address"></Input>
        </Grid>
        <Grid  item xs={12}>
          <Input value={this.state.phone} onChange={this.onInputChange} name="phone" className="input" placeholder="Phone"></Input>
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
        {!this.state.isValid ? 
          <Grid
            className="error-message"
            item
            xs={12}
            style={{color: 'red'}}
          >
            {this.state.errorMessage}
          </Grid> : null
        }
      </Grid>
    );
  }
}

export default SignUpPage;