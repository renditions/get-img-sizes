# @renditions/get-sizes

[![npm version](https://img.shields.io/npm/v/@renditions/get-sizes.svg?style=flat-square)](https://www.npmjs.com/package/@renditions/get-sizes) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

Generate the sizes attribute for HTML [img](https://devdocs.io/html/element/img) and [picture](https://devdocs.io/html/element/picture) tags.

## Install

```sh
npm install @renditions/get-sizes
```

## Usage

```js
import getSizes from '@renditions/get-sizes'

const sizes = getSizes({
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
})

console.log(sizes)
```

The above code logs the following string to the console:

```
(min-width: 960px) 50vw,(min-width: 480px) 100vw,100vw
```

### Using with React

```jsx
import React from 'react'
import getSizes from '@renditions/get-sizes'

const Image = ({ width, ...rest }) => {
  const sizes = getSizes({ defaultImageWidth: width })

  return <img sizes={sizes} {...rest} />
}
```
