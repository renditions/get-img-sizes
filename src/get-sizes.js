const getSizes = ({ defaultImageWidth, breakpoints = [] }) => {
  const sizes = breakpoints.map(bp => `(min-width: ${bp.viewportMinWidth}) ${bp.imageWidth || defaultImageWidth}`)
  sizes.push(defaultImageWidth)
  return sizes.join(',')
}

module.exports = getSizes
