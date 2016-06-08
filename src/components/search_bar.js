
// const Component = React.Component;
import React, { Component } from 'react';

// Class based component [used when 'state' is needed]
class SearchBar extends Component {
  constructor(props) {
    super(props);
    // Initailize state object
    this.state = { term: 'Default Value' };
  }
  render() {
    return (
      <div>
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
  }
}

export default SearchBar;
