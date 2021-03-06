const Streamz = artifacts.require('./Streamz.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()


contract('Streamz', ([deployer, uploader]) => {
  let streamz

  before(async () => {
    streamz = await Streamz.deployed()    
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await streamz.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
    it('has a name', async () => {
      const name = await streamz.name()
      assert.equal(name, 'Streamz')
    })
  })


  // Tests
    // It uploads videos
    // It lists videos
  describe('videos', async () => {
    let result, videoCount
    const hash = "Qmc5gCcjYypU7y28oCALwfSvxCBskLuPKWpK4qpterKC7z"

    before(async () => {
      result = await streamz.uploadVideo(hash, 'Video title', { from: uploader })
      videoCount = await streamz.videoCount()
    })

    it('uploads videos', async () => {
      // SUCCESS
      assert.equal(videoCount, 1)
      const event = result.logs[0].args
      // console.log(event)
      assert.equal(event.id.toNumber(), videoCount.toNumber(), 'Video Id is correct')
      assert.equal(event.hash, hash, 'Video hash is correct')
      assert.equal(event.title, 'Video title', 'Video title is correct')
      assert.equal(event.uploader, uploader, 'Uploader is correct')

      // FAILURE
      // Video must have hash
      await streamz.uploadVideo('', 'Video title', { from: uploader }).should.be.rejected;
      // Video must have title
      await streamz.uploadVideo('Video hash', '', { from: uploader }).should.be.rejected;
    })    

    it('lists videos', async () => {
      const video = await streamz.videos(videoCount)
      assert.equal(video.id.toNumber(), videoCount.toNumber(), 'Video Id is correct')
      assert.equal(video.hash, hash, 'Video hash is correct')
      assert.equal(video.title, 'Video title', 'Video title is correct')
      assert.equal(video.uploader, uploader, 'Uploader is correct')
    })
  })
})



