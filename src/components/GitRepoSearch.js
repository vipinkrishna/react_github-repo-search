// https://github.com/vipinkrishna

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
    if(this.state.search.trim().length > 0) {
      fetch(`https://api.github.com/search/repositories?q=${this.state.search}`)
        .then(response => response.json())
        .then(result => {
          this.setState({count: result.total_count, result: result.items});
        })
        .catch(error => console.error('[ERROR]: ', error))
    }
  }

  render() {
    return (
      <div className="GitRepoSearch">
        <div className="searchForm">
          <h5>Git Repo Search Filter</h5>
          <form onSubmit={this.handleSubmit}>
            <input name="search" placeholder="Search" onChange={this.handleChange}/>
            <button>Search</button>
          </form>
        </div>
        <SearchResults count={this.state.count} result={this.state.result}/>
      </div>
    );
  }

  
}

export default GitRepoSearch;
