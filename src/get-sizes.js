const getSizes = ({ width, breakpoints = [] }) => {
  const sizes = breakpoints.map(bp => `(min-width: ${bp.mediaMinWidth}) ${bp.width || width}`)
  sizes.push(width)
  return sizes.join(',')
}

const sortByMediaMinWidth = breakpoints => {
  breakpoints.forEach(bp => {
    if (bp.mediaMinWidth) {
      bp._mediaMinWidthInt = parseInt(bp.mediaMinWidth, 10)
    }
  })
  breakpoints.sort((a, b) => b._mediaMinWidthInt - a._mediaMinWidthInt)
}

const getSortedSizes = (config, sort = false) => {
  if (!sort) {
    return getSizes(config)
  }

  const configCopy = { ...config }

  configCopy.breakpoints = configCopy.breakpoints || []

  sortByMediaMinWidth(configCopy.breakpoints)

  return getSizes(configCopy)
}

module.exports = getSortedSizes
