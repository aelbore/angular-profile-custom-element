import '../ar-input/bundles/ar-input.umd.min.js';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserProfileCard } from './card/card.component';
import { AppService } from './app.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UserProfileCard ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
