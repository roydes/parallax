import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { ParallaxHeaderComponent } from './components/parallax-header/parallax-header.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            RouterTestingModule
        ],
        declarations: [
            AppComponent,
            ParallaxDirective,
            ParallaxHeaderComponent
        ],
    }).compileComponents();
  }));

  it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      expect(app).toBeTruthy();
  });
});
