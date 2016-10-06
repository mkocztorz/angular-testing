import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FirstModule} from "./modules/first/first.module";
import {ParentComponent} from "./modules/first/components/parent.component";
import {ChildComponent} from "./modules/first/components/child.component";

@NgModule({
  imports: [
      BrowserModule,
      FirstModule
  ],
  declarations: [
      AppComponent
  ],
  bootstrap: [
      AppComponent,
      ParentComponent,
      ChildComponent
  ]
})
export class AppModule { }
