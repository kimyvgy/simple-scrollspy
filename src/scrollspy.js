export class ScrollSpy {
  constructor(menu, options = {}) {
    if (!menu) {
      throw new Error('First argument is query selector to your navigation.')
    }

    if (typeof options !== 'object') {
      throw new Error('Second argument must be instance of Object.')
    }

    let defaultOptions = {
      sectionClass: '.scrollspy',
      menuActiveTarget: 'li > a',
      offset: 0,
      hrefAttribute: 'href',
      activeClass: 'active'
    }

    this.menuList = menu instanceof HTMLElement ? menu : document.querySelector(menu)
    this.options = Object.assign({}, defaultOptions, options)
    this.sections = document.querySelectorAll(this.options.sectionClass)
  }

  onScroll() {
    const section = this.getSectionInView()
    const menuItem = this.getMenuItemBySection(section)

    if (menuItem) {
      this.removeCurrentActive({ ignore: menuItem })
      this.setActive(menuItem)
    }
  }

  getMenuItemBySection(section) {
    if (!section) return
    const sectionId = section.getAttribute('id')
    return this.menuList.querySelector(`[${this.options.hrefAttribute}="#${sectionId}"]`)
  }

  getSectionInView() {
    for (let i = 0; i < this.sections.length; i++) {
      const startAt = this.sections[i].offsetTop
      const endAt = startAt + this.sections[i].offsetHeight
      const currentPosition = (document.documentElement.scrollTop || document.body.scrollTop) + this.options.offset
      const isInView = currentPosition > startAt && currentPosition <= endAt
      if (isInView) return this.sections[i]
    }
  }

  setActive(activeItem) {
    const isActive = activeItem.classList.contains(this.options.activeClass)
    if (!isActive) activeItem.classList.add(this.options.activeClass)
  }

  removeCurrentActive({ ignore }) {
    const { hrefAttribute, menuActiveTarget } = this.options
    const items = `${menuActiveTarget}.active:not([${hrefAttribute}="${ignore.getAttribute(hrefAttribute)}"])`
    const menuItems = this.menuList.querySelectorAll(items)

    menuItems.forEach((item) => item.classList.remove(this.options.activeClass))
  }
}
