// Improt Lodash
import _ from 'lodash';

// Import React
import React, { Component } from 'react'; // var Component = React.Component
import ReactDOM from 'react-dom';

// Youtube search API
import YTSearch from 'youtube-api-search';

// Import components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube API Key
const API_KEY = "AIzaSyACpKIVaL4UeXbKhagm3PKaViUwkSh-yhM";

// Create a new component. This compenent shold
// prodce some HTML.
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    // Fetch inital YouTube videos
    this.searchTerm("drake", firstVideo => this.setState({selectedVideo: firstVideo}));

  }

  searchTerm(term, callback) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos
      });

      if (callback) {
        callback(videos[0]);
      }

    });
  }

  render(){

    // Using lodash to throttle function calls
    const videoSearch = _.debounce(term => { this.searchTerm(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// Render an App component instance.
ReactDOM.render(<App />, document.querySelector('#container'));
