import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

import { HomeConstants } from './home.constants';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constants = HomeConstants;
    figuresState = [];
    periscopeState: boolean;

    constructor() { }

    ngOnInit() {
        this.constants.MODELS_DATA.forEach(() => {
            this.figuresState.push(false);
        });
    }

    setFigureState(state: boolean, i: number): void {
        setTimeout(() => {
            this.figuresState[i] = state;
        }, 150 * (i + 1));
    }

    setPeriscopeState(state: boolean): void {
        this.periscopeState = state;
    }

    translateY(
        element: ElementRef, renderer: Renderer2,
        scrollPosition: { scrollLeft: number, scrollTop: number },
        extras: { factor: number }
    ): void {
        const { factor } = extras;
        const { scrollTop } = scrollPosition;

        renderer.setStyle(element.nativeElement, 'transform', `translateY(${scrollTop / factor}%)`);
    }

    movePersicopeBackgroundUp (
        element : ElementRef,
        renderer: Renderer2,
        scrollPosition: { scrollLeft: number,  scrollTop: number },
        extras?: { isBeingScrolled: boolean, factor: number }
    ): void {
        const { isBeingScrolled } = extras;
        const viewPortHeight = window.innerHeight;
        const nativeElement = element.nativeElement;
        const elementTop = nativeElement.getBoundingClientRect().top;
        const opacity = (viewPortHeight - elementTop) / (viewPortHeight);

        if (isBeingScrolled) {
            renderer.setStyle(element.nativeElement, 'background-position', `center ${viewPortHeight - elementTop}px`);
            renderer.setStyle(nativeElement.children.item(0), 'opacity', opacity);
        }
    }
}
