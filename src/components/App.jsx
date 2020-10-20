import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      changedVideo: false,
    };
    this.onVideoListClick = this.onVideoListClick.bind(this);
  }
  onVideoListClick() {
    console.log('clickedddd');
    this.setState = ({
      currentVideo: exampleVideoData[1],
      changedVideo: true,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em></em><VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList
              onClick={this.onVideoListClick()}
              videos={this.state.videos}/></em> </h5></div>
          </div>
        </div>
      </div>
    );
  }
  //is this updating
}
// onClick={() => {
//   this.state.changedVideo = true;
//   if (this.state.changedVideo) {
//     this.state.videos = video;
//   }
// }}videos={this.state.videos}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
