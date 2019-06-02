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
        starcount: result.owner.stargazers_count,
        forkscount: result.owner.forks_count,
        openissuescount: result.owner.open_issues_count,
        linkto: result.html_url,
        login: result.owner.login
      }
      return <SearchResult key={result.id} {...properties} />;
    });
    return (
      <div className="SearchResults">
        {search_results}
      </div>
    );
  }
}

export default SearchResults;
