# @renditions/get-sizes

[![npm version](https://img.shields.io/npm/v/@renditions/get-sizes.svg?style=flat-square)](https://www.npmjs.com/package/@renditions/get-sizes) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

Generate the sizes attribute for HTML [img](https://devdocs.io/html/element/img) and [picture](https://devdocs.io/html/element/source) tags.

## Install

```sh
npm install @renditions/get-sizes
```

## Usage

```js
import getSizes from '@renditions/get-sizes'

const sizes = getSizes({
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
})

console.log(sizes)
```

The above code logs the following string to the console:

```
(min-width: 960px) 50vw,(min-width: 480px) 100vw,100vw
```

The breapoints argument is expected to be an array **sorted by `viewportMinWidth` in descending order**.

### Using with React

```jsx
import React from 'react'
import getSizes from '@renditions/get-sizes'

const Image = ({ width = '100vw', ...rest }) => {
  const sizes = getSizes({ width })

  return <img sizes={sizes} {...rest} />
}
```
