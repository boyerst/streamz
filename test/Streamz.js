const Streamz = artifacts.require('./Streamz.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()


contract('Streamz', ([deployer, author]) => {
  let streamz

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      streamz = await Streamz.deployed()
      const address = await streamz.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

  })





})