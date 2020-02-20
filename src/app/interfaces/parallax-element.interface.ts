import { ElementRef, Renderer2 } from '@angular/core';

export declare interface ParallaxElement {
    /**
     * A handler for parallax animation
     */
    parallaxAnimationHandler(
        element: ElementRef,
        renderer: Renderer2,
        scrollPosition?: { scrollLeft: number, scrollTop: number },
        extras?: { factor: number }
    ): void;
}
