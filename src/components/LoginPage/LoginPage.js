import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './LoginPage.css'
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      session: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
          session: result.data.token
        });
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
 
  render() {
    return (
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
    );
  }
}

export default LoginPage;