import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { ParallaxHeaderComponent } from './components/parallax-header/parallax-header.component';
import { ScrollService } from './services/scroll.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ParallaxDirective,
        ParallaxHeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ScrollService],
    bootstrap: [AppComponent]
})
export class AppModule { }
