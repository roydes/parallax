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
        this.constants.MODELS_DATA.forEach(() => {
            this.figuresState.push(false);
        });
    }

    setFigureState(state: boolean, i: number): void {
        setTimeout(() => {
            this.figuresState[i] = state;
        }, 150 * (i + 1));
    }
}
