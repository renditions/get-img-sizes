const getImgSizes = ({ breakpoints, defaultWidth }) => {
  const sizes = breakpoints.map(bp => `(min-width: ${bp.minWidth}) ${defaultWidth}`)
  sizes.push(`${defaultWidth}`)
  return sizes.join(',')
}

module.exports = getImgSizes
