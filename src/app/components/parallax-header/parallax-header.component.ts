import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

import { ParallaxElement } from '../../interfaces/parallax-element.interface'
import { ScrollService } from '../../services/scroll.service';

@Component({
    selector: 'parallax-header',
    templateUrl: 'parallax-header.component.html',
    styleUrls: ['./parallax-header.component.scss']
})

export class ParallaxHeaderComponent implements OnInit, ParallaxElement {
    constructor(private scrollService: ScrollService) { }

    ngOnInit() {
        this.parallaxAnimationHandler = this.parallaxAnimationHandler.bind(this);
    }

    /**
     * Move an element in Y axis with a factor speed
     * @param {ElementRef} element
     * @param {Renderer2} renderer
     * @param {Object} extras
     */
    parallaxAnimationHandler(
        element: ElementRef,
        renderer: Renderer2,
        extras: { factor: number }
    ): void {
        const { factor } = extras;
        const { scrollTop } = this.scrollService.getScrollPosition();

        renderer.setStyle(element.nativeElement, 'transform', `translateY(${scrollTop / factor}%)`);
    }
}
