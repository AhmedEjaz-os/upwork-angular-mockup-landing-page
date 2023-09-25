// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app.routing';


// Bootstrap Import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Material Import
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgIf, NgForOf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


// Component Imports
import { AppComponent } from './app.component';
import { AngularMaterialDialogComponent } from './components/angular-material-dialog/angular-material-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { Page1Component } from './components/page-1/page-1.component';
import { SelectMenuComponent } from './components/select-menu/select-menu.component';
import { Page2Component } from './components/page-2/page-2.component';
import { Page1NewInputFieldsComponent } from './components/page-1-new-input-fields/page-1-new-input-fields.component';
import { MaterialCheckboxComponent } from './components/material-checkbox/material-checkbox.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';


const MaterialImportsArray = [
  FormsModule, 
  MatFormFieldModule, 
  MatInputModule, 
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatIconModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDialogModule,
  MatMenuModule
]
@NgModule({
  declarations: [
    AngularMaterialDialogComponent,
    AppComponent,
    HeaderComponent,
    Page1Component,
    SelectMenuComponent,
    Page2Component,
    Page1NewInputFieldsComponent,
    TextAreaComponent,
    MaterialCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ...MaterialImportsArray
  ],
  providers: [NgIf, NgForOf],
  bootstrap: [AppComponent]
})
export class AppModule { }
