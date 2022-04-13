import React, { Component } from 'react';
import './App.css';

class Main extends Component {
  render() {
    return (
      
      <div className="container-fluid font-monospace">
        <br></br>
        <br></br>

        <div className="col-12 row">
          <div className="col-md-10">
            <div className="embed-responsive embed-responsive-16by9" style={{ maxHeight: '768px' }}>
              <video src="" controls></video>
            </div>
            <h3><b><i> TITLE </i></b></h3>
          </div>


          <div className="col-md-2 overflow-visible text-center" style= {{ maxHeight: '768px', minWidth: '175px'}}>
            <h6><b> Share Video </b></h6>
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
                  // id="videoTitle" 
                  type="text" 
                  className="form-control-sm" 
                  placeholder="Title..." 
                  ref={(input) => { this.videoTitle = input }}
                  required />
              </div>
              &nbsp;
              <div className="d-grid col-9 mx-auto">
                <button type="submit" className="btn btn-danger btn-sm">Upload!</button>
              </div>
            </form>

          </div>

        </div>
      </div>


    )
  }
}



export default Main;