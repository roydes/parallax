import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {
  @Input('appScrollAnimation') animation: Function;
  @Input('animationProps') props: string;
  @Input('checkIfScrolled') checkIfScrolled: boolean;
  @Output('scrolledOver') scrolledOver: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('window:scroll')
  onScroll() {
    if (this.animation) {
      this.animation(this.element, this.renderer, this.props);
    }

    if (this.checkIfScrolled) {
      this.scrolledOver.emit(window.pageYOffset > this.element.nativeElement.getBoundingClientRect().top);
    }
  }

}
