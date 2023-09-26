// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app.routing';


// Bootstrap Import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Material Import
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { NgIf, NgForOf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';



// Component Imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Page1Component } from './components/page-1/page-1.component';
import { Page2Component } from './components/page-2/page-2.component';
import { Page3Component } from './components/page-3/page-3.component';
import { Page1NewInputFieldsComponent } from './components/page-1-new-input-fields/page-1-new-input-fields.component';
import { SelectMenuComponent } from './components/select-menu/select-menu.component';
import { AngularMaterialDialogComponent } from './components/angular-material-dialog/angular-material-dialog.component';
import { MaterialCheckboxComponent } from './components/material-checkbox/material-checkbox.component';
import { MaterialDatePickerComponent } from './components/material-date-picker/material-date-picker.component';
import { MaterialDropdownSelectMenuComponent } from './components/material-dropdown-select-menu/material-dropdown-select-menu.component';


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
  MatMenuModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Page1Component,
    SelectMenuComponent,
    Page2Component,
    Page1NewInputFieldsComponent,
    TextAreaComponent,
    MaterialCheckboxComponent,
    Page3Component,
    AngularMaterialDialogComponent,
    MaterialDatePickerComponent,
    MaterialDropdownSelectMenuComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ...MaterialImportsArray
  ],
  providers: [NgIf, NgForOf],
  bootstrap: [AppComponent],
  entryComponents: [AngularMaterialDialogComponent],
})
export class AppModule { }
