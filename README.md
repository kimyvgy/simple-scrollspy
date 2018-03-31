# Simple Scrollspy

Simple scrollspy without jQuery, no dependencies and lightweight. Only 1.94Kb.

## Install
You can install by `npm` or download inject `simple-scrollspy.js` file into your HTML code:
```npm
npm install simple-scrollspy
```
```html
<script src="/path/to/dist/simple-scrollspy.js"></script>
```

## Usages
```js
import scrollSpy from 'simple-scrollspy'

scrollSpy('#menu-list', {
    offset: 100,
    menuActiveTarget: '.menu__item > a',
    sectionClass: 'body section.scrollspy',
    activeClass: 'active'
})
```
Or:
```html
<script src="/path/to/dist/simple-scrollspy.js"></script>
<script>
    window.onload = function () {
        scrollSpy('#menu-list', {
            offset: 100,
            menuActiveTarget: '.menu__item > a',
            sectionClass: 'body section.scrollspy',
            activeClass: 'active'
        })
    }
</script>
```

## Arguments
- The first argument is your menu list selector. Type of `String|HTMLElement`.
- The second argument is optional. Type of `Object`:

| Name          | Type          | Default       | Description |
| ------------- |:-------------:|:-------------:| :-----------|
| `offset`      | Number        | 0             | Offset number |
| `menuActiveTarget` | String | `li > a` | Element will be added active class |
| `sectionClass` | String | `.scrollspy` | Query selector to your sections |
| `activeClass` | String | `active` | Active class name |
