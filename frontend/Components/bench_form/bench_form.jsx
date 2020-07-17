import React, { Component } from 'react'

export default class BenchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
       lat: props.lat || undefined, 
       lng: props.lng || undefined, 
       description: '', 
       seating: 0, 
       photo: '', 
       preview: null
    }
    this.updateField = this.updateField.bind(this); 
    this.handleFormSubmit = this.handleFormSubmit.bind(this); 
    this.updatePhoto = this.updatePhoto.bind(this);
  }

  handleFormSubmit() { 
    let benchData = Object.assign({}, this.state)
    let formData = new FormData()
   
    for (let input in benchData) { 
    if(`${input}` !== 'preview' )
      formData.append(`bench[${input}]`, benchData[input])
    }

    this.props.createBench(formData).then(
      () => this.props.history.push('/'), 
      error => console.log('form submit error', error)
    )
  }


  updatePhoto(e) { 
    e.preventDefault()
    let file = e.target.files[0]
    let reader = new FileReader();
    reader.onloadend = () => { 
      this.setState({
        photo: file, 
        preview: reader.result })
    }
    reader.readAsDataURL(file)
  }

  updateField(field) { 
    return e => { 
      this.setState({[field]: e.target.value})
    }
  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Description</label>
          <br/>
          <textarea 
            cols="30" 
            rows="10"
            onChange={this.updateField('description')}></textarea>
          <br/>
          <label>
            Number Of Seats
            <br/>
            <input 
              type="number" 
              min="1" 
              max="10"
              onChange={this.updateField('seating')}/>
          </label>
          <br/>
          <label>
            Latitude 
            <br/>
            <input type="number"  disabled value={this.state.lat}/>
          </label>
          <br/>
          <label>
            Longitude
            <br/>
            <input type="number" disabled value={this.state.lng}/>
          </label>
          <br/>
          <label htmlFor="">Add Bench Picture</label>
          <br/>
          <input 
            type="file"
            onChange={this.updatePhoto}/>
          
          <br/>
          <input type="submit" value="Submit"/>
        </form>

        {this.state.preview? 
        <img 
          style={{height: '300px', width: '200px'}}
          src={this.state.preview}>
        </img> : <p>No Image to Preview</p>}
      </div>
    )
  }
}
