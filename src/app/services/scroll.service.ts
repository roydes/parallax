import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    constructor() { }

    getScrollPosition() {
        return {
            scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop: window.pageYOffset || document.documentElement.scrollTop
        }
    }

}
