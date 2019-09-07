# @renditions/get-img-sizes

> Generate string for HTML image sizes attribute.

## Install

```sh
npm install @renditions/get-img-sizes
```

## Usage

```js
import getImgSizes from '@renditions/get-img-sizes'

const sizes = getImgSizes({
  defaultWidth: '100vw',
  breakpoints: [
    {
      minWidth: 960
    },
    {
      minWidth: 480
    }
  ]
})

console.log(sizes)
```

The above code logs the following string to the console:

```
(min-width: 960px) 100vw,(min-width: 480px) 100vw,100vw
```

### Using with React

```jsx
import React from 'react'
import getImgSizes from '@renditions/get-img-sizes'

const Image = ({ src, srcset, alt, width }) => {
  const sizes = getImgSizes({
    defaultWidth: width,
    breakpoints: [
      {
        minWidth: 960
      },
      {
        minWidth: 480
      }
    ]
  })

  return (
    <img src={src} srcSet={srcset} sizes={sizes} alt={alt} />
  )
}
```
