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

  constructor() { }

  ngOnInit() {
    this.constants.MODELS_IMGS.forEach(() => {
      this.figuresState.push(false);
    });
  }

  translateY(element: ElementRef, renderer?: Renderer2, props?: { factor: number }): void {
    const scrollY = window.pageYOffset;
    const { factor } = props;

    renderer.setStyle(element.nativeElement, 'transform', `translate(0px, ${scrollY / factor}%)`);
  }

  setFigureState(state: boolean, i: number,): void {
    this.figuresState[i] = state;
  }

}
