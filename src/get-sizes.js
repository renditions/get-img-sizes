const getSizes = ({ width, breakpoints = [] }) => {
  const sizes = breakpoints.map(bp => `(min-width: ${bp.viewportMinWidth}) ${bp.width || width}`)
  sizes.push(width)
  return sizes.join(',')
}

module.exports = getSizes
