# Simple Scrollspy

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
| `scrollContainer`  | String|HTMLElement | empty string  | User Defined Scrolling Container |

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
        })
    }
</script>
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
- Let feel free to make a pull request if you can. Or just create the issues when you got it.
- Don't forget give it a star if you feels it is really helpfull for us. It may save somebody in someday.

## Helpful links
- [Documentation](https://kimyvgy.github.io/simple-scrollspy)
- [Example](https://kimyvgy.github.io/simple-scrollspy/demo)
- [See on NPM package](https://www.npmjs.com/package/simple-scrollspy)

## Licence
[MIT](./LICENSE)
