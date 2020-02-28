import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { ParallaxHeaderComponent } from './components/parallax-header/parallax-header.component';
import { ParallaxPeriscopeComponent } from './components/parallax-periscope/parallax-periscope.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ParallaxDirective,
        ParallaxHeaderComponent,
        ParallaxPeriscopeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
