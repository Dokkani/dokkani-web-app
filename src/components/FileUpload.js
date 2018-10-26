import React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFileChange(event) {
    this.setState({
      image: event.target.files[0]
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', this.state.image, this.state.image.name);
    axios.post('http://localhost:5000/file', formData);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input type="file" placeholder="file" onChange={this.handleFileChange}></Input>
        <Button variant="raised" type="submit">Submit</Button>
      </form>
    );
  }
}

export default FileUpload;