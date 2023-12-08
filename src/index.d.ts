declare module 'simple-scrollspy' {
    type MenuElement = string | HTMLElement;
    type Options = {
        sectionClass?: string;
        menuActiveTarget?: string;
        offset?: number;
        hrefAttribute?: string;
        activeClass?: string;
        scrollContainer?: string;
        smoothScroll?: boolean | ScrollIntoViewOptions,
    };
    export default function scrollSpy(menuElement: MenuElement, options: Options): void;
}
