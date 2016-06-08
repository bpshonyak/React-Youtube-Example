// Import React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Youtube search API
import YTSearch from 'youtube-api-search';

// Import components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// Youtube API Key
const API_KEY = "AIzaSyACpKIVaL4UeXbKhagm3PKaViUwkSh-yhM";

// Create a new component. This compenent shold
// prodce some HTML.
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: []
    }

    // Fetch inital YouTube videos
    YTSearch({ key: API_KEY, term: 'sol' }, (videos) => {
      this.setState({ videos }); // ES6 sugar for videos: videos
    });

  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Render an App component instance.
ReactDOM.render(<App />, document.querySelector('#container'));
