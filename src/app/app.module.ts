import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { ParallaxHeaderComponent } from './components/parallax-header/parallax-header.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ParallaxHeaderComponent,
        ParallaxDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
