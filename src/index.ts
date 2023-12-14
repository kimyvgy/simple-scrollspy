import { ScrollSpy, type MenuElement, type Options } from './scrollspy'

const scrollSpy = (el: MenuElement, options: Partial<Options> = {}) => {
  const instance = new ScrollSpy(el, options)

  window.onload = instance.onScroll;
  window.addEventListener('scroll', () => instance.onScroll())

  return instance
}

export type {
  MenuElement,
  Options,
  ScrollSpy
};

export default scrollSpy;

