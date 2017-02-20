import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from "./two.routing";
import {TwoComponent} from "./two.component";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    TwoComponent
  ]
})
export class TwoModule {
}
