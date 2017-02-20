import {Routes, RouterModule} from "@angular/router";
import {TemplateComponent} from "./template.component";
import {ModuleWithProviders} from "@angular/core";
import {OneComponent} from "./one/one.component";
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'template',
    component: TemplateComponent,
    children: [
      {path: '', redirectTo: 'one', pathMatch: 'full'},
      {path: 'one', component: OneComponent},
      {path: 'two', loadChildren: 'app/template/two/two.module#TwoModule'},
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
