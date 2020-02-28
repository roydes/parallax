import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxPeriscopeComponent } from './parallax-periscope.component';
import { Renderer2, Type, ElementRef } from '@angular/core';
import { ParallaxDirective } from 'src/app/directives/parallax.directive';

describe('ParallaxPeriscopeComponent', () => {
    const elementRef = {
        nativeElement: document.createElement('div')
    };
    elementRef.nativeElement.appendChild(document.createElement('div'));

    let component: ParallaxPeriscopeComponent;
    let fixture: ComponentFixture<ParallaxPeriscopeComponent>;
    let renderer: Renderer2;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ParallaxPeriscopeComponent,
                ParallaxDirective
            ],
            providers: [
                Renderer2,
                { provide: ElementRef, useValue: elementRef }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ParallaxPeriscopeComponent);
        component = fixture.componentInstance;
        renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should handle periscope effect', () => {
        component.ngOnInit();
        const callComponentMethod = (isBeingScrolled: boolean) => {
            component.applyPeriscopeEffect(
                elementRef,
                renderer,
                { isBeingScrolled, factor: 3 }
            );
        };

        callComponentMethod(false);
        expect(elementRef.nativeElement.style.backgroundPosition)
            .toBe('');

        callComponentMethod(true);
        expect(elementRef.nativeElement.style.backgroundPosition)
            .toBe(`center ${window.innerHeight - elementRef.nativeElement.getBoundingClientRect().top}px`);
    });

    it('should handle setPeriscopeState', () => {
        component.ngOnInit();

        component.setPeriscopeState(false);
        expect(component.periscopeState).toBe(false);

        component.setPeriscopeState(true);
        expect(component.periscopeState).toBe(true);
    });
});
