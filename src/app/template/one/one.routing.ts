import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {OneComponent} from "./one.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: OneComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
