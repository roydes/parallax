import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';
import { PeriscopeComponent } from './components/periscope/periscope.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ScrollAnimationDirective,
        PeriscopeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
