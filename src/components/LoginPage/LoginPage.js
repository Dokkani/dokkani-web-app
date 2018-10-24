import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './LoginPage.css'

class LoginPage extends React.Component {
  render() {
    return (
      <Grid container spacing={24} justify='center' alignItems="center" direction="column">
        <Grid item xs={12}>
          <Input className="input" placeholder="Email"></Input>
        </Grid>
        <Grid item xs={12}>
          <Input className="input" placeholder="Password"></Input>
        </Grid>
        <Grid item xs={12}>
        <Button
          className="button"
          variant="outlined"
          size="medium"
          color="primary"
        >
          Submit
        </Button>
        </Grid>
      </Grid>
    );
  }
}

export default LoginPage;