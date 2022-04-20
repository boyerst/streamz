import React, { Component } from 'react';
import './App.css';
import share from '../share-fill.svg'


class Main extends Component {
  render() {
    return (
      
      <div className="container-fluid font-monospace">
        <br></br>
        <br></br>

        <div className="col-12 row">
          <div className="col-md-10">
            <div className="center-text ms-5">
              <video className="container-fluid modal-fullscreen-sm-down ms-5" src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`} style={{ maxWidth: '1200px' }} controls></video>
             {/* <video className="modal-dialog modal-fullscreen-lg-down" src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`} controls></video>*/}
            </div>
            <h3><b><i> {this.props.currentTitle} </i></b></h3>
          </div>

          <div className="col-md-2 overflow-scroll text-center" style={{ maxHeight: '768px', minWidth: '175px'}}>
            <h5>
              <img src={share} alt=""></img>
              <b> Share Video </b>
            </h5>
            <form onSubmit={(event) => {
              event.preventDefault()
              const title = this.videoTitle.value
              this.props.uploadVideo(title)
            }}>
            &nbsp;
              <input 
                type="file" 
                accept=".mp4, .mkv, .ogg, .wmv" 
                style={{ width: '250px' }} 
                onChange={this.props.captureFile} />
              <div className="form-group me-sm-2">
                <br></br>
                <input 
                  id="videoTitle" 
                  type="text" 
                  className="form-control-sm" 
                  placeholder="Title..." 
                  ref={(input) => { this.videoTitle = input }}
                  required />
              </div>
              &nbsp;
              <div className="d-grid col-9 mx-auto">
                <button type="submit" className="mb-5 btn btn-danger btn-sm">Upload!</button>
              </div>
            </form>

            { this.props.videos.map((video, key) => {
              return (
                <div className="card mb-3 text-center bg-light mx-auto" style={{ width: '225px' }} key={key} >
                  <div className="card-title bg-dark">
                    <small className="text-white"><b>{video.title}</b></small>
                  </div>
                  <div className="mx-auto" style={{ width: '210px'}}>
                      <p className="mx-auto" onClick={() => this.props.changeVideo(video.hash, video.title)}>
                        <video src={`https://ipfs.infura.io/ipfs/${video.hash}`} style={{ width: '190px' }} />
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