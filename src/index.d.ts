declare module 'simple-scrollspy' {

    type MenuElement = string | HTMLElement;
    type SmoothScroll = boolean | ScrollIntoViewOptions;

    type Options = {
        sectionClass: string;
        menuActiveTarget: string;
        offset: number;
        hrefAttribute: string;
        activeClass: string;
        scrollContainer: string;
        smoothScroll: SmoothScroll,
        smoothScrollBehavior?: (targetElement: HTMLElement, smoothScrollOptions: SmoothScroll) => void;
        onActive?: (activeItem: HTMLElement) => void;
    }

    class ScrollSpy {
        menuList: HTMLElement;
        options: Options;
        scroller: HTMLElement;
        sections: NodeList;

        attachEventListeners(): void;
        onClick(event: Event): void;
        onScroll(): void;
        scrollTo(targetElement: HTMLElement): void;
        getMenuItemBySection(section: HTMLElement): HTMLElement;
        getSectionInView(): HTMLElement | void;
        setActive(activeItem: HTMLElement): void;
        removeCurrentActive({ ignore: HTMLElement }): void;
    }

    export default function scrollSpy(menuElement: MenuElement, options: Partial<Options>): ScrollSpy;
}
