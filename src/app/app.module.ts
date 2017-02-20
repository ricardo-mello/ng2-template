import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {RouterModule} from "@angular/router";
import {TemplateModule} from "./template/template.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    TemplateModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
