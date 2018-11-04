import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './LoginPage.css'
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      session: '',
      success: null,
      redirect: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleRedirect() {
    console.log('function called');
    if (this.state.success) {
      this.setState({
        redirect: true
      })
    } else {
      this.setState({
        redirect: false
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('click');
    if (this.state.email && this.state.password) {
      axios.post('http://localhost:5000/api/users/login', this.state)
      .then(result => {
        console.log(result);
        this.setState({
          email: '',
          password: '',
          session: result.data.token,
          success: result.data.success
        });
        this.handleRedirect();
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
 
  render() {
    return (
      <div>
      <Grid container spacing={24} justify='center' alignItems="center" direction="column">
        <Grid item xs={12}>
          <Input value={this.state.email} onChange={this.handleInputChange} name="email" className="login-input" placeholder="Email"></Input>
        </Grid>
        <Grid item xs={12}>
          <Input value={this.state.password} onChange={this.handleInputChange} name="password" className="login-input" placeholder="Password"></Input>
        </Grid>
        <Grid item xs={12}>
        <Button
          className="button"
          variant="outlined"
          size="medium"
          color="primary"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
        </Grid>
      </Grid>
      {this.state.redirect ? <Redirect to="/login/success"/> : null }
      </div>
    );
  }
}

export default LoginPage;