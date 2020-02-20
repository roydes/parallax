import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appParallax]'
})
export class ParallaxDirective {
    @Input('appParallax') animation: Function;
    @Input('scrolledChecker') scrolledChecker: Function;
    @Input('animationExtras') extras: string;
    @Input('checkIfScrolled') checkIfScrolled: boolean;
    @Output('scrolledOver') scrolledOver: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) { }

    @HostListener('window:scroll')
    onScroll() {
        const elementRect = this.element.nativeElement.getBoundingClientRect();
        const scrollPosition = {
            scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop: window.pageYOffset || document.documentElement.scrollTop
        }
        const viewPortHeight = window.innerHeight;

        if (this.animation) {
            this.animation(this.element, this.renderer, scrollPosition, this.extras);
        }

        if (this.checkIfScrolled) {
            this.scrolledOver.emit(viewPortHeight > elementRect.top && elementRect.bottom > 0);
        }
    }

}
