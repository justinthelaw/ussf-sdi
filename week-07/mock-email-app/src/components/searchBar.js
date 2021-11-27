import React from 'react'
import SearchResults from './searchResults'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      input: this.input.value
    })
    document.querySelector('.searchForm').reset();
  }

  clearSearch(){
    this.setState({
      input: ''
    })
  }

  render() {
    if(this.state.input){
      return(
        <div>
          <SearchResults subject={this.state.input} />
          <button type="button" onClick={this.clearSearch}>Clear Search</button>
        </div>
      )
    }
    return(
      <form onSubmit={this.handleSubmit} className='searchForm'>
        <label>
          Search Emails:
          <input type="text" placeholder="Type here..." ref={(input) => this.input = input}/>
        </label>
        <input type="submit" value="Search"/>
      </form>
    )
  }
}