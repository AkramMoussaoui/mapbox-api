import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxMapboxGLModule } from "ngx-mapbox-gl";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        "pk.eyJ1IjoiYWtyYW0yNSIsImEiOiJjanl1M2ZyanYwOXc0M21wcml4dGRjbzcyIn0.Mqgp71vVsF24E9m6FFilCw",
      geocoderAccessToken:
        "pk.eyJ1IjoiYWtyYW0yNSIsImEiOiJjanl1M2ZyanYwOXc0M21wcml4dGRjbzcyIn0.Mqgp71vVsF24E9m6FFilCw"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
