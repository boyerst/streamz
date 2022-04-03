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
      result = await streamz.uploadVideo(hash, 'Here is a title', { from: uploader })
      videoCount = await streamz.videoCount()
    })

    it('uploads videos', async () => {
      assert.equal(videoCount, 1)
    })    

    xit('lists videos', async () => {
        
    })

  })


})