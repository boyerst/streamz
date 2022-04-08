import React, { Component } from 'react';


class Main extends Component {
  render() {
    return (
      
      <div className="container-fluid">
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-10">
            <div className="embed-responsive-16by9" style={{ maxHeight: '768px' }}>
              <video src="" controls></video>
            </div>
            <h3><b><i> Title </i></b></h3>
          </div>

          <div>
            <h6><b> Share Video </b></h6>
            <form action="">
              <input type="file" />
              <div>
                <input type="text" />
              </div>
              <button type="submit">Upload!</button>
            </form>

          </div>

        </div>
      </div>


    )
  }
}



export default Main;