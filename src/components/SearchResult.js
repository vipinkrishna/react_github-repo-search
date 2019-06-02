import React, { Component } from 'react';
import './SearchResult.css';

class SearchResult extends Component {

  render() {
    return (
      <div className="SearchResult">
          <div className="result">
            <img src={this.props.avatar} alt={this.props.login}/>
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
            <div>
              <span>Star {this.props.starcount}</span>
              <span>Fork {this.props.forkscount}</span>
              <span>Issues {this.props.openissuescount}</span>
            </div>
          </div>
          <a href={this.props.linkto} target="_blank">VIEW PROFILE</a>
      </div>
    );
  }
}

export default SearchResult;
