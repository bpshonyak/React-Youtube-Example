
// const Component = React.Component;
import React, { Component } from 'react';

// Class based component [used when 'state' is needed]
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onSearchTermChange = props.onSearchTermChange;
    // Initailize state object
    this.state = { term: 'drake' };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
    this.onSearchTermChange(event.target.value);
  }
}

export default SearchBar;
