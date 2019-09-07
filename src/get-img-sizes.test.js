const getImgSizes = require('./get-img-sizes')

describe('get img sizes', () => {
  const args = {
    defaultWidth: '100vw',
    breakpoints: [
      {
        minWidth: 960
      },
      {
        minWidth: 480
      }
    ]
  }

  it('should return a string', () => {
    expect(typeof getImgSizes(args)).toBe('string')
  })

  it('should return the correct string', () => {
    expect(getImgSizes(args)).toBe('(min-width: 960px) 100vw,(min-width: 480px) 100vw,100vw')
  })
})
