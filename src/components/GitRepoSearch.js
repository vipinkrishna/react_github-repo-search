import React, { Component } from 'react';
import './GitRepoSearch.css';
import SearchResults from './SearchResults';

class GitRepoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      count: 0,
      result: [] 
    };
  }

  handleChange = (el) => {
    this.setState({[el.target.name]: el.target.value});
  }

  handleSubmit = (el) => {
    el.preventDefault();
    fetch(`https://api.github.com/search/repositories?q=${this.state.search}`)
      .then(response => response.json())
      .then(result => {
        this.setState({count: result.total_count, result: result.items});
        // console.log(this.state);
      })
      .catch(error => console.error('[ERROR]: ', error))
  }

  render() {
    return (
      <>
        <form className="search" onSubmit={this.handleSubmit}>
          <input name="search" placeholder="Search" onChange={this.handleChange}/>
          <button>Search</button>
        </form>
        <SearchResults count={this.state.count} result={this.state.result}/>
      </>
    );
  }

  
}

export default GitRepoSearch;
