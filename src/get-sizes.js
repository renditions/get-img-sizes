const getSizes = ({ width, breakpoints = [] }) => {
  const sizes = breakpoints.map(bp => `(min-width: ${bp.mediaMinWidth}) ${bp.width || width}`)
  sizes.push(width)
  return sizes.join(',')
}

module.exports = getSizes
