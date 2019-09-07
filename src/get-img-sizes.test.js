const getImgSizes = require('./get-img-sizes')

describe('get img sizes', () => {
  const args = {
    defaultImageWidth: '100vw',
    breakpoints: [
      {
        viewportMinWidth: '960px',
        imageWidth: '50vw'
      },
      {
        viewportMinWidth: '480px'
      }
    ]
  }

  it('should return a string', () => {
    expect(typeof getImgSizes(args)).toBe('string')
  })

  it('should return the correct string', () => {
    expect(getImgSizes(args)).toBe('(min-width: 960px) 50vw,(min-width: 480px) 100vw,100vw')
  })
})
