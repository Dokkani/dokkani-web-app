import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import './SearchPage.css';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  // formControl: {
  //   minWidth: 200
  // },
  button: {
    marginTop: 20
  },
  // textField: {
  //   minWidth: 200
  // }

});

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
  }
  render() {
    return (
      // <form className={this.classes.root}>
        <Grid spacing={24} container direction="column" alignItems="flex-start" justify="flex-start">
          <TextField
            placeholder="Product"
            className="text-field"
          />
          <FormControl 
            className="form-control"
          >
            <InputLabel>Category</InputLabel>
            <Select>
              <MenuItem value=""></MenuItem>
              <MenuItem value="clothes">Clothes</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="household">Household</MenuItem>
              <MenuItem value="tools">Tools</MenuItem>
            </Select>
          </FormControl>
          <Button
            className={this.classes.button}
            variant="outlined"
            size="medium"
            color="primary"
          >
            Search
          </Button>
        </Grid>
      // </form>
    );
  }
}

export default withStyles(styles)(SearchPage);