import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from "./one.routing";
import {OneComponent} from "./one.component";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    OneComponent
  ]
})
export class OneModule {
}
