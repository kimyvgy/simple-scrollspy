export type MenuElement = string | HTMLElement;
export type SmoothScroll = boolean | ScrollIntoViewOptions;

export type Options = {
    sectionClass: string;
    menuActiveTarget: string;
    offset: number;
    hrefAttribute: string;
    activeClass: string;
    scrollContainer: string | HTMLElement;
    smoothScroll: SmoothScroll,
    smoothScrollBehavior?: (targetElement: HTMLElement, smoothScrollOptions: SmoothScroll) => void;
    onActive?: (activeItem: HTMLElement) => void;
};

export class ScrollSpy {
    public menuList: HTMLElement | null;
    public options: Options;
    public scroller: HTMLElement | Window | null;
    public sections: NodeListOf<HTMLElement>;

    constructor(menu: MenuElement, options: Partial<Options> = {}) {
      if (!menu) {
        throw new Error('Your navigation query selector is the first argument.')
      }

      if (typeof options !== 'object') {
        throw new Error('The second argument must be an instance of an Object.')
      }

      let defaultOptions = {
        sectionClass: '.scrollspy',
        menuActiveTarget: 'li > a',
        offset: 0,
        hrefAttribute: 'href',
        activeClass: 'active',
        scrollContainer: '',
        smoothScroll: {},
      }

      options.smoothScroll = options.smoothScroll === true && {} || options.smoothScroll

      this.menuList = menu instanceof HTMLElement ? menu : document.querySelector(menu)
      this.options = Object.assign({}, defaultOptions, options)

      if(this.options.scrollContainer) {
        this.scroller = this.options.scrollContainer instanceof HTMLElement ? this.options.scrollContainer : document.querySelector<HTMLElement>(this.options.scrollContainer)
      } else {
        this.scroller = window
      }

      this.sections = document.querySelectorAll<HTMLElement>(this.options.sectionClass)

      this.attachEventListeners()
    }

    attachEventListeners() {
      if (this.scroller) {
        this.scroller.addEventListener('scroll', () => this.onScroll())

        // smooth scroll
        if (this.options.smoothScroll && this.menuList) {
          const menuItems = this.menuList.querySelectorAll<HTMLElement>(this.options.menuActiveTarget)
          menuItems.forEach((item) => item.addEventListener('click', this.onClick.bind(this)))
        }
      }
    }

    onClick(event: MouseEvent) {
      if (event.target) {
        const targetSelector = (event.target as HTMLElement).getAttribute(this.options.hrefAttribute)
        if (targetSelector) {
          const targetElement = document.querySelector<HTMLElement>(targetSelector)

          if (targetElement && this.options.smoothScroll) {
            // prevent click event
            event.preventDefault()
            // handle smooth scrolling to 'targetElement'
            this.scrollTo(targetElement)
          }
        }
      }
    }

    onScroll() {
      const section = this.getSectionInView()
      if (section) {
        const menuItem = this.getMenuItemBySection(section)

        if (menuItem) {
          this.removeCurrentActive({ ignore: menuItem })
          this.setActive(menuItem)
        }
      }
    }

    scrollTo(targetElement: HTMLElement) {
      const smoothScrollBehavior = typeof this.options.smoothScrollBehavior === 'function' && this.options.smoothScrollBehavior

      if (smoothScrollBehavior) {
        smoothScrollBehavior(targetElement, this.options.smoothScroll)
      } else {
        targetElement.scrollIntoView({
          ...(this.options.smoothScroll === true ? {} : this.options.smoothScroll),
          behavior: 'smooth',
        })
      }
    }

    getMenuItemBySection(section: HTMLElement) {
      if (!section || !this.menuList) return
      const sectionId = section.getAttribute('id')
      return this.menuList.querySelector<HTMLElement>(`[${this.options.hrefAttribute}="#${sectionId}"]`)
    }

    getSectionInView() {
      for (let i = 0; i < this.sections.length; i++) {
        const startAt = this.sections[i]!.offsetTop
        const endAt = startAt + this.sections[i]!.offsetHeight
        let currentPosition = (document.documentElement.scrollTop || document.body.scrollTop) + this.options.offset

        if(this.options.scrollContainer && this.scroller) {
          const scrollTop = this.scroller instanceof Window ? this.scroller.scrollY : this.scroller.scrollTop;
          currentPosition = (scrollTop) + this.options.offset
        }

        const isInView = currentPosition > startAt && currentPosition <= endAt
        if (isInView) return this.sections[i]
      }
    }

    setActive(activeItem: HTMLElement) {
      const isActive = activeItem.classList.contains(this.options.activeClass)
      if (!isActive) {
        activeItem.classList.add(this.options.activeClass)
        if (typeof this.options.onActive === 'function') {
          this.options.onActive(activeItem)
        }
      }
    }

    removeCurrentActive({ ignore }: { ignore: HTMLElement }) {
      if (this.menuList) {
        const { hrefAttribute, menuActiveTarget, activeClass } = this.options
        const items = `${menuActiveTarget}.${activeClass}:not([${hrefAttribute}="${ignore.getAttribute(hrefAttribute)}"])`
        const menuItems = this.menuList.querySelectorAll(items)

        menuItems.forEach((item) => item.classList.remove(this.options.activeClass))
      }
    }
  }
