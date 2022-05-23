import React, { Component } from 'react'
import './App.css'
import share from '../images/share-icon.png'


class Main extends Component {
  render() {
    return (
      
      <div className="container-fluid font-monospace">
        <br></br>
        <br></br>
        <div className="col-12 row">
          <div className="mainVideoDiv1 col-lg-9">
            <div className="mainVideoDiv2 center-text ms-5">
              <video className="mainVideo container-fluid modal-fullscreen-sm-down ms-1" src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`} controls></video>
              <div className="col-12 row">
                <h3 className="col-md-9 ms-4">
                  <b><i className="ms-1"> {this.props.currentTitle} </i></b>
                </h3> 
                <h6 className="shareVideoH col-md-2 pt-2">
{/*                  <a className="shareVideo" href={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`} target="_blank">
                    <i>
                      Share Video
                    </i>
                    <img className="shareImage ms-3" width="23" height="23" src={share} alt=""></img>
                  </a>*/}

                  <button className="shareVideo" onClick={this.props.showShareVideoModal}>
                    <i>
                      Share Video
                    </i>
                    <img className="shareImage ms-3" width="23" height="23" src={share} alt=""></img>
                  </button>
                 

                </h6>
              </div>
            </div>
          </div>

          <div className="videoIndexDiv col-sm-3 overflow-auto text-center" >
            <form onSubmit={(event) => {
              event.preventDefault()
              const title = this.videoTitle.value
              this.props.uploadVideo(title)
            }}>
            &nbsp;
              <input 
                type="file" 
                accept=".mp4, .mkv, .ogg, .wmv" 
                // style={{ width: '250px' }} 
                onChange={this.props.captureFile} />
              <div className="form-group">
                <br></br>
                <input 
                  className="col-7"
                  id="videoTitle" 
                  type="text" 
                  // size="20"
                  className="form-control-sm" 
                  placeholder="Title..." 
                  ref={(input) => { this.videoTitle = input }}
                  required 
                />
              </div>
              &nbsp;
              <div className="uploadVideoDiv">
                <button type="submit" className="uploadButton btn-danger btn-sm hover-shadow">Upload Video</button>
              </div>
            </form>
           
            { this.props.videos.map((video, key) => {
              return (
                <div className="videoCards card mb-3 text-center bg-light mx-auto" key={key} >
                  <div className="card-title">
                    <small >
                      <b>{video.title}</b>
                    </small>

                  </div>
                  <div className="videoDivs mx-auto" >
                      <p className="mx-auto" onClick={() => this.props.changeVideo(video.hash, video.title)}>
                        <video className="videoTag" src={`https://ipfs.infura.io/ipfs/${video.hash}`} />
                      </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}





export default Main;