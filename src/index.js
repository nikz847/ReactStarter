import _ from "lodash"
import React, {Component} from "react"
import ReactDOM from "react-dom"
import YTSearch from "youtube-api-search"
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyDjxDvwtXMjsvyY_zzWcRFHcm4zJdr9K6o";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.onInputChange("bears");
  }

  onInputChange(term) {
    YTSearch({key: API_KEY, term: term},(videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const onInputChange = _.debounce(term => this.onInputChange(term), 300);
    return (
    <div>
      <SearchBar onSearchTermChange = {onInputChange} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        videos={this.state.videos}
        onVideoSelected = {selectedVideo => this.setState({selectedVideo})} />
    </div>
  );
}
}

ReactDOM.render(<App />, document.querySelector(".container"))
