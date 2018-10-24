import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './HomePage.css';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

 
const HomePage = props => {
  const { classes } = props;
  return (
    <Grid container spacing={24} justify='center' alignItems="center" direction="column">
      <Typography
        className="title"
        variant="h5"
        color="secondary" 
      >
        Welcome to Dokkani
      </Typography>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        className="login"
      >
        Login
      </Button>
      <Link id="signup" to="/signup">Sign Up</Link>
    </Grid>
    
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(HomePage);