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
          <div className="col-md-2 overflow-auto text-center" style= {{ maxHeight: '768px', minWidth: '175px'}}>
            <h6><b> Share Video </b></h6>
            <form onSubmit={(event) => {

            }}>
            &nbsp;
              <input type="file" />
              <div className="form-group me-sm-2">
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