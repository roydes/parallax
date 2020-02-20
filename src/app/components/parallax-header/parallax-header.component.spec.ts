import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { ParallaxHeaderComponent } from './parallax-header.component';

describe('ParallaxHeaderComponent', () => {
    let component: ParallaxHeaderComponent;
    let fixture: ComponentFixture<ParallaxHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ParallaxHeaderComponent,
            ]
        }).compileComponents();

        fixture = TestBed.get(ParallaxHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should be creted', () => {
        expect(component).toBeTruthy();
    });

    it('should handle parallax animation', () => {

    });
});
