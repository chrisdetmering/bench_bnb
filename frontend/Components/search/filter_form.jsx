  import React, { Component } from 'react'
  
  export default class FilterForm extends Component {
    constructor(props) { 
      super(props)

      this.updateSeatingSearch = this.updateSeatingSearch.bind(this); 
    }

    updateSeatingSearch(field) { 
      return e => { 
        this.props.updateFilter(field, Number(e.target.value))
      }
    }
    
    render() {
      return (
        <div>
          <label >Minimum Seating:</label>
          <input 
            type="number"
            min='1'
            max='10'
            onChange={this.updateSeatingSearch('minSeating')}/>
          <label>Maximum Seating:</label>
          <input
            type="number"
            min='1'
            max='10' 
            onChange={this.updateSeatingSearch('maxSeating')}/>
        </div>
      )
    }
  }
  