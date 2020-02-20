import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-periscope',
  templateUrl: './periscope.component.html',
  styleUrls: ['./periscope.component.scss']
})
export class PeriscopeComponent implements OnInit {
    @Input() promoTitle: string;
    @Input() buttonText: string;
    @Input() imageSrc: string;
    periscopeState: boolean;

    constructor() { }

    ngOnInit() {

    }

    movePeriscopeBackgroundUp (
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

    setPeriscopeState(state: boolean): void {
        this.periscopeState = state;
    }
}
