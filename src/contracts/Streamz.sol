pragma solidity ^0.5.16;

// [X] 1. Model the video
// [ ] 2. Store the video
// [ ] 3. Upload video
// [ ] 4. List videos


contract Streamz {

  string public name = "Streamz";
  uint public videoCount= 0;


  // Mapping (store videos)
  mapping(uint => Video) public videos;

  // Struct (model videos)
  struct Video {
    uint id;
    string hash;
    string title;
    address uploader;
  }


  // Event (video has been uploaded)
  event VideoUploaded (
    uint id,
    string hash,
    string title,
    address uploader
  );

  // Constructor
  constructor() public {

  }


  // Function (upload video)
  function uploadVideo(string memory _videoHash, string memory _title) public {
    require(bytes(_videoHash).length > 0);
    require(bytes(_title).length > 0);
    require(msg.sender!=address(0));
    videoCount++;
    videos[videoCount] = Video(videoCount, _videoHash, _title, msg.sender);
    emit VideoUploaded(videoCount, _videoHash, _title, msg.sender);
  }

}



