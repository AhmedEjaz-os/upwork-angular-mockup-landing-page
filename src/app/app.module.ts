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
import { Page1NewInputFieldsComponent } from './components/page-1-new-input-fields/page-1-new-input-fields.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MaterialImportsArray = [
  FormsModule, 
  MatFormFieldModule, 
  MatInputModule, 
  ReactiveFormsModule,
  BrowserAnimationsModule
]
@NgModule({
  declarations: [
    AngularMaterialDialogComponent,
    AppComponent,
    HeaderComponent,
    Page1Component,
    SelectMenuComponent,
    Page1NewInputFieldsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ...MaterialImportsArray
  ],
  providers: [NgIf],
  bootstrap: [AppComponent]
})
export class AppModule { }
