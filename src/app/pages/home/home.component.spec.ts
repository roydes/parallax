import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { ParallaxHeaderComponent } from '../../components/parallax-header/parallax-header.component';
import { ParallaxPeriscopeComponent } from 'src/app/components/parallax-periscope/parallax-periscope.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                ParallaxDirective,
                ParallaxHeaderComponent,
                ParallaxPeriscopeComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
