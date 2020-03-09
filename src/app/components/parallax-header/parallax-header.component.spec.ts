import { ElementRef, Renderer2, Type } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { ParallaxDirective } from '../../directives/parallax.directive';
import { ParallaxHeaderComponent } from './parallax-header.component';

describe('ParallaxHeaderComponent', () => {
    const elementRefStub = {
        nativeElement: document.createElement('DIV')
    }
    let component: ParallaxHeaderComponent;
    let fixture: ComponentFixture<ParallaxHeaderComponent>;
    let renderer: Renderer2;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ParallaxHeaderComponent,
                ParallaxDirective
            ],
            providers: [
                Renderer2,
                { provide: ElementRef, useValue: elementRefStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ParallaxHeaderComponent);
        component = fixture.componentInstance;
        renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
        fixture.detectChanges();
    });

    it('should be creted', () => {
        expect(component).toBeTruthy();
    });

    it('should handle parallax animation', () => {
        component.parallaxAnimationHandler(
            elementRefStub,
            renderer,
            { scrollLeft: 0, scrollTop: 1 },
            { factor: 4}
        );

        expect(elementRefStub.nativeElement.style.transform).toBe('translateY(0.25%)');
    });
});
