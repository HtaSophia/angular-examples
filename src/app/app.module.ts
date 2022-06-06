import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgContentExampleModule } from './ng-content-example/ng-content-example.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgContentExampleModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
