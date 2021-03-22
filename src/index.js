module.exports = (el, options = {}) => {
  const { ScrollSpy } = require('./scrollspy')
  const instance = new ScrollSpy(el, options)

  window.onload = instance.onScroll()
  window.addEventListener('scroll', () => instance.onScroll())

  return instance
}
