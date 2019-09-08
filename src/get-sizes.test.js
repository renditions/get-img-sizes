const getSizes = require('./get-sizes')

describe('get sizes attribute', () => {
  let args

  beforeEach(() => {
    args = {
      width: '100vw',
      breakpoints: [
        {
          viewportMinWidth: '960px',
          width: '50vw'
        },
        {
          viewportMinWidth: '480px'
        }
      ]
    }
  })

  it('should return a string', () => {
    expect(typeof getSizes(args)).toBe('string')
  })

  it('should return the correct string', () => {
    expect(getSizes(args)).toBe('(min-width: 960px) 50vw,(min-width: 480px) 100vw,100vw')
  })

  it('should return the correct string without breakpoints', () => {
    delete args.breakpoints
    expect(getSizes(args)).toBe('100vw')
  })
})
