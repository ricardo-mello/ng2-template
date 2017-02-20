import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateComponent} from "./template.component";
import {routing} from "./template.routing";
import {RouterModule} from "@angular/router";
import {OneComponent} from "./one/one.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing
  ],
  declarations: [TemplateComponent, OneComponent]
})
export class TemplateModule {
}
