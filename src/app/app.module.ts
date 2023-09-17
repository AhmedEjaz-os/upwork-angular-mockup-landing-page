// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app.routing';

// Bootstrap Import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Component Imports
import { AppComponent } from './app.component';
import { AngularMaterialDialogComponent } from './components/angular-material-dialog/angular-material-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

const MaterialImportsArray = [
  
]
@NgModule({
  declarations: [
    AngularMaterialDialogComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
