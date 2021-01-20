import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EssayComponent } from './essay/essay.component';
import { AnimaliaComponent } from './animalia/animalia.component';
import { PlantaeComponent } from './plantae/plantae.component';
import { FungiComponent } from './fungi/fungi.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EssayComponent,
    AnimaliaComponent,
    PlantaeComponent,
    FungiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
