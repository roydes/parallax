import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    constructor() { }

    /**
     * Returns scroll coordinates
     * @returns { scrollLeft: number, scrollTop: number }
     */
    getScrollPosition(): { scrollLeft: number, scrollTop: number } {
        return {
            scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop: window.pageYOffset || document.documentElement.scrollTop
        }
    }
}
