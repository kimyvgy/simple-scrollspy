# Simple Scrollspy

[![NPM version](https://img.shields.io/npm/v/simple-scrollspy.svg)](https://www.npmjs.com/package/simple-scrollspy)

[Simple scrollspy](https://kimyvgy.github.io/simple-scrollspy) is a lightweight javascript library without jQuery,
no dependencies. It is used to make scrollspy effect for your menu, table of contents, etc.
Only 1.94Kb.

This is a [scrollspy demo](https://kimyvgy.github.io/simple-scrollspy/demo) for my menu in the navigation bar.

## Install
1. Via NPM:

Install NPM package - https://www.npmjs.com/package/simple-scrollspy:

```npm
npm install simple-scrollspy
```

2. The other way, you also can inject `simple-scrollspy.min.js` file into your HTML code:

```html
<script src="/path/to/dist/simple-scrollspy.min.js"></script>
```

## Usages

Easy for using, syntax just like this:

```html
scrollSpy(menuElement, options)
```

This little plugin will add `active` class into your existing menu item when you scroll your page to a matched section by ID.
If you are giving it a try, make sure that you:
1. Added CSS for `active` class in your menu item. Because, this plugin do NOT include CSS.
2. Added ID for your sections.
    Example: `<section id="first-section">...</section>`
3. Added an attribute which is an section ID into your menu items. Default is `href`.
    Example: `"href"="#first-section"`.
You also replace `href` with the other name by `hrefAttribute` in `options`.

### Arguments

1. The `menuElement` is query selector to your menu. It is `String` or `HTMLElement` instance.
2. The `options` is optional. It is type of `Object` which contains properties below:

| Name               | Type               | Default       | Description                        |
|--------------------|:-------------------|:--------------|:-----------------------------------|
| `sectionClass`     | String             | `.scrollspy`  | Query selector to your sections    |
| `menuActiveTarget` | String             | `li > a`      | Element will be added active class |
| `offset`           | Number             | 0             | Offset number                      |
| `hrefAttribute`    | String             | `href`        | The menu item's attribute name which contains section ID |
| `activeClass`      | String             | `active`      | Active class name will be added into `menuActiveTarget`|
| `scrollContainer`  | String, HTMLElement | empty string  | User Defined Scrolling Container |
| `smoothScroll`  | Boolean, Object | `false`  | Enable the smooth scrolling feature |
| `smoothScrollBehavior`  | Function | `undefined`  | Define your smooth scroll behavior |

### ES6 example

```js
import scrollSpy from 'simple-scrollspy'

const options = {
    sectionClass: '.scrollspy',           // Query selector to your sections
    menuActiveTarget: '.menu-item',       // Query selector to your elements that will be added `active` class
    offset: 100,                          // Menu item will active before scroll to a matched section 100px
    scrollContainer: '.scroll-container', // Listen scroll behavior on `.scroll-container` instead of `window`
}

// init:
scrollSpy(document.getElementById('main-menu'), options)

// or shorter:
scrollSpy('#main-menu', options)
```

### Inject static file

```html
<script src="/path/to/dist/simple-scrollspy.min.js"></script>
<script>
  window.onload = function () {
    scrollSpy('#main-menu', {
      sectionClass: '.scrollspy',
      menuActiveTarget: '.menu-item',
      offset: 100,
      // smooth scroll
      smoothScroll: true,
      smoothScrollBehavior: function(element) {
        console.log('run "smoothScrollBehavior"...', element)
        element.scrollIntoView({ behavior: 'smooth' }) // default behavior
      }
    })
  }
</script>
```

### Smooth scroll

```javascript
import jumpTo from 'jump.js'

scrollSpy('#main-menu', {
  // ....,

  // enable smooth scroll:
  // - true: enable with the default scroll behavior
  // - false: disable this feature
  // - object: enable with some options that will pass to `Element.scrollIntoView` or `smoothScrollBehavior`
  //   + Default behavior: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  //   + Jump.js: https://www.npmjs.com/package/jump.js
  smoothScroll: {
    duration: 1000, // only works with jump.js,
    offset: -100,   // only works with jump.js,
  },

  // customize scroll behavior,
  // - default: Element.scrollIntoView({ ...smoothScroll, behavior: 'smooth' })
  // - customize: you can define your scroll behavior. Ex: use `jump.js`, jQuery, .etc
  smoothScrollBehavior: function(element, options) {
    // use `jump.js` instead of the default scroll behavior
    jumpTo(element, options)
  }
})
```

## Development

```bash
$ yarn install
$ yarn dev
```

## Build
```bash
$ yarn build
```
or:
```npm
$ npm run build
```
The `dist` folder is automatically created and include file `simple-scrollspy.min.js`

## Note
- Feel free to make a pull request if you can, and create a Github issue if you come across one.
- Don't forget to give a star if you feel that the library is helpful to you. It may save somebody a lot of trouble some day.

## Helpful links
- [Documentation](https://kimyvgy.github.io/simple-scrollspy)
- [Example](https://kimyvgy.github.io/simple-scrollspy/demo)
- [See on NPM package](https://www.npmjs.com/package/simple-scrollspy)

## Licence
[MIT](./LICENSE)
