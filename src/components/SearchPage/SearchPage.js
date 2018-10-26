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
  button: {
    marginTop: 20,
    marginLeft: 50
  }
});

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.state = {
      category: ''
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value
    });
  }

  render() {
    return (
      <Grid spacing={24} container direction="column" alignItems="flex-start" justify="center">
        <TextField
          placeholder="What are you looking for?"
          className="text-field"
        />
        <FormControl 
          className="form-control"
        >
          <InputLabel>Category</InputLabel>
          <Select
            onChange={this.handleCategoryChange}
            value={this.state.category}
          >
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
    );
  }
}

export default withStyles(styles)(SearchPage);