import React, { Component } from 'react';
import './SearchResult.css';

class SearchResult extends Component {

  render() {
    return (
      <div className="SearchResult">
        <div className="tile">
          <img src={this.props.avatar} alt={this.props.login}/>
        </div>
      </div>
    );
  }
}

export default SearchResult;
