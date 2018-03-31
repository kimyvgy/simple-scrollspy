export class ScrollSpy {
    constructor (menu, options = {}) {
        if (!menu) {
            throw new Error('First argument is query selector to your navigation.')
        }

        if (typeof options !== 'object') {
            throw new Error('Second argument must be instance of Object.')
        }

        let defaultOptions = {
            offset: 0,
            menuActiveTarget: 'li > a',
            sectionClass: '.scrollspy',
            activeClass: 'active',
        }

        this.menuList = menu instanceof HTMLElement ? menu : document.querySelector(menu)
        this.options = Object.assign({}, defaultOptions, options)
        this.sections = document.querySelectorAll(this.options.sectionClass)
    }

    onScroll () {
        this.sections.forEach((section) => {
            const currentPosition = document.documentElement.scrollTop || document.body.scrollTop
            const isInView = section.offsetTop <= currentPosition + this.options.offset
            if (isInView) {
                const menuItemID = section.getAttribute('id')
                const activeItem = this.menuList.querySelector(`[data-scrollspy="#${menuItemID}"]`)
                if (!activeItem) {
                    return
                }

                this.removeCurrentActive()
                this.setActive(activeItem)
            }
        })
    }

    setActive (activeItem) {
        activeItem.setAttribute('data-active', 'true')
        activeItem.classList.add(this.options.activeClass)
    }

    removeCurrentActive () {
        const menuItems = this.menuList.querySelectorAll(this.options.menuActiveTarget)
        menuItems.forEach((item) => {
            item.setAttribute('data-active', 'false')
            item.classList.remove(this.options.activeClass)
        })
    }
}
