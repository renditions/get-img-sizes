const getSizes = require('./get-sizes')

describe('get sizes attribute', () => {
  let args
  let argsUnsorted

  beforeEach(() => {
    args = {
      width: '100vw',
      breakpoints: [
        {
          mediaMinWidth: '1440px',
          width: '33vw'
        },
        {
          mediaMinWidth: '960px',
          width: '50vw'
        },
        {
          mediaMinWidth: '720px',
          width: '100vw'
        },
        {
          mediaMinWidth: '480px'
        }
      ]
    }
    argsUnsorted = {
      width: '100vw',
      breakpoints: [
        {
          mediaMinWidth: '480px'
        },
        {
          mediaMinWidth: '960px',
          width: '50vw'
        },
        {
          mediaMinWidth: '720px',
          width: '100vw'
        },
        {
          mediaMinWidth: '1440px',
          width: '33vw'
        },
      ]
    }
  })

  it('should return a string', () => {
    expect(typeof getSizes(args)).toBe('string')
  })

  it('should return the correct string', () => {
    expect(getSizes(args)).toBe('(min-width: 1440px) 33vw,(min-width: 960px) 50vw,(min-width: 720px) 100vw,(min-width: 480px) 100vw,100vw')
  })

  it('should return the correct string without breakpoints', () => {
    delete args.breakpoints
    expect(getSizes(args)).toBe('100vw')
  })

  it('should sort breakpoints by media min width if second param is true', () => {
    expect(getSizes(argsUnsorted, true)).toBe('(min-width: 1440px) 33vw,(min-width: 960px) 50vw,(min-width: 720px) 100vw,(min-width: 480px) 100vw,100vw')
  })

  it('should not sort breakpoints if second param is false', () => {
    expect(getSizes(argsUnsorted, false)).toBe('(min-width: 480px) 100vw,(min-width: 960px) 50vw,(min-width: 720px) 100vw,(min-width: 1440px) 33vw,100vw')
  })

  it('should return the correct string without breakpoints if second param is true', () => {
    delete args.breakpoints
    expect(getSizes(args, true)).toBe('100vw')
  })
})
