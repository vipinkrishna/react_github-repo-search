import React, { Component } from 'react';
import './SearchResults.css';
import SearchResult from './SearchResult';

class SearchResults extends Component {

  render() {
    const search_results = this.props.result.map(result => {
      const properties = {
        id: result.id,
        name: result.name,
        description: result.description,
        avatar: result.owner.avatar_url,
        starcount: result.stargazers_count,
        forkscount: result.forks_count,
        openissuescount: result.open_issues_count,
        linkto: result.html_url,
        login: result.owner.login
      }
      return <SearchResult key={result.id} {...properties} />;
    });
    return (
      <div className="SearchResults">
        <h5>Repo Search Result</h5>
        <div className="resultContainer">
          {/* {search_results.slice(0,10)} */}
          {search_results}
        </div>
      </div>
    );
  }
}

export default SearchResults;
