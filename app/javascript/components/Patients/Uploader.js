import React from 'react'
import axios from 'axios';

class Uploader extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        selectedFile: '',
        patients: this.props.patients
      }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  submit(){
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    console.warn(this.state.selectedFile);
    let url = "http://localhost:3000/patients";
    const token = 
      document.querySelector('[name=csrf-token]').content
    
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.post(url, data).
    then((response) => {
      alert('File successfully uploaded')
      this.setState({
        patients: data
      })
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  render(){
    return(
        <div>
          <label>Select File :</label>
          <input type="file" name="upload_file" accept=".csv,text/csv" onChange={this.handleInputChange} />
          <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Upload</button>
        </div>
    )  
  }
}

export default Uploader;