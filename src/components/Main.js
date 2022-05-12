import React, { Component } from 'react'
import './App.css'
import share from '../share-fill.svg'


class Main extends Component {
  render() {
    return (
      
      <div className="container-fluid font-monospace">
        <br></br>
        <br></br>

        <div className="col-12 row">

          <div className="col-md-9">

            <div className="center-text ms-5">
              <video className="container-fluid modal-fullscreen-sm-down ms-1" src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`} style={{ maxWidth: '1200px' }} controls></video>
             {/* <video className="modal-dialog modal-fullscreen-lg-down" src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`} controls></video>*/}
              
{/*              <h3 className="col-md-3 ms-5">
                <b><i className="ms-1"> {this.props.currentTitle} </i></b>
                <a href={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`}>
                  <img className="image" width="20" height="20" src={share} alt=""></img>
                </a>
              </h3>*/}

              <div className="col-12 row">
                <h3 className="col-md-9 ms-4">
                  <b><i className="ms-1"> {this.props.currentTitle} </i></b>
                </h3> 
                <h7 className="col-md-2 ms-auto">
                  Share Video
                  <a href={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`}>
                    <img className="image ms-3" width="20" height="20" src={share} alt=""></img>
                  </a>
                </h7>
       {/*          <div className="col-md-1">``
                </div>*/}
              </div>




            </div>


          </div>

          <div className="col-sm-3 overflow-scroll text-center" style={{ maxHeight: '768px', minWidth: '175px'}}>
    {/*        <h5 className="mb-4">
              <img src={share} alt=""></img>
              <b> Upload Video </b>
            </h5>*/}
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
              <div className="form-group me-sm-3">
                <br></br>
                <input 
                  id="videoTitle" 
                  type="text" 
                  className="form-control-sm" 
                  placeholder="Title..." 
                  ref={(input) => { this.videoTitle = input }}
                  required 
                  className="col-7 ms-3"/>
              </div>
              &nbsp;
              <div className="d-grid col-7 mx-auto">
                <button type="submit" className="mb-5 btn btn-danger btn-sm">Upload Video</button>
              </div>
            </form>

            { this.props.videos.map((video, key) => {
              return (
                <div className="card mb-3 text-center bg-light mx-auto" style={{ width: '250px' }} key={key} >
                  <div className="card-title bg-secondary">
                    <small className="text-white">
                      <b>{video.title}</b>
                    </small>

                  </div>
                  <div className="mx-auto" style={{ width: '210px'}}>
                      <p className="mx-auto" onClick={() => this.props.changeVideo(video.hash, video.title)}>
                        <video src={`https://ipfs.infura.io/ipfs/${video.hash}`} style={{ width: '200px' }} />
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