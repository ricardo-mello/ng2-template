import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {TwoComponent} from "./two.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: TwoComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
