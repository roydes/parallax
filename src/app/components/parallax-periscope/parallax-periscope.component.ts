import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'parallax-periscope',
  templateUrl: './parallax-periscope.component.html',
  styleUrls: ['./parallax-periscope.component.scss']
})
export class ParallaxPeriscopeComponent implements OnInit {
    @Input() buttonText: string;
    @Input() imageSrc: string;
    @Input() promoTitle: string;
    periscopeState: boolean;

    constructor() { }

    ngOnInit() {

    }

    applyPeriscopeEffect(
        element: ElementRef,
        renderer: Renderer2,
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

    setPeriscopeState(state: boolean): void {
        this.periscopeState = state;
    }
}
