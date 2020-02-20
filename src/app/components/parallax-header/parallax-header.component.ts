import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

import { ParallaxElement } from '../../interfaces/parallax-element.interface'

@Component({
    selector: 'parallax-header',
    templateUrl: 'parallax-header.component.html',
    styleUrls: ['./parallax-header.component.scss']
})

export class ParallaxHeaderComponent implements OnInit, ParallaxElement {
    constructor() { }

    ngOnInit() { }

    parallaxAnimationHandler(
        element: ElementRef,
        renderer: Renderer2,
        scrollPosition: { scrollLeft: number, scrollTop: number },
        extras: { factor: number }
    ): void {
        const { factor } = extras;
        const { scrollTop } = scrollPosition;

        renderer.setStyle(element.nativeElement, 'transform', `translateY(${scrollTop / factor}%)`);
    }
}
