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
import { Page1Component } from './components/page-1/page-1.component';
import { SelectMenuComponent } from './components/select-menu/select-menu.component';
import { Page2Component } from './components/page-2/page-2.component';
import { Page2InputFieldsComponent } from './components/page-2-input-fields/page-2-input-fields.component';
import { Page2InputFieldsVerticleComponent } from './components/page-2-input-fields-verticle/page-2-input-fields-verticle.component';

const MaterialImportsArray = [
  
]
@NgModule({
  declarations: [
    AngularMaterialDialogComponent,
    AppComponent,
    HeaderComponent,
    Page1Component,
    SelectMenuComponent,
    Page2Component,
    Page2InputFieldsComponent,
    Page2InputFieldsVerticleComponent,
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
