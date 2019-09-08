const getImgSizes = require('./get-sizes')

describe('get img sizes', () => {
  let args

  beforeEach(() => {
    args = {
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
  })

  it('should return a string', () => {
    expect(typeof getImgSizes(args)).toBe('string')
  })

  it('should return the correct string', () => {
    expect(getImgSizes(args)).toBe('(min-width: 960px) 50vw,(min-width: 480px) 100vw,100vw')
  })

  it('should return the correct string without breakpoints', () => {
    delete args.breakpoints
    expect(getImgSizes(args)).toBe('100vw')
  })
})
