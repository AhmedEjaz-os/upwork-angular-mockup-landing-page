// Angular Imports
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

// Component Imports
import { AngularMaterialDialogComponent } from "./app/components/angular-material-dialog/angular-material-dialog.component";
import { Page1Component } from "./app/components/page-1/page-1.component";
import { SelectMenuComponent } from "./app/components/select-menu/select-menu.component";
import { Page1NewInputFieldsComponent } from "./app/components/page-1-new-input-fields/page-1-new-input-fields.component";

const routes: Routes = [
  {
    path: "",
    component: Page1Component,
    data: {
      breadcrumb: "...",
    },
  },
  {
    path: "new-account",
    component: Page1NewInputFieldsComponent,
  },
  {
    path: "post",
    component: AngularMaterialDialogComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: "enabled" })],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    // CustomPreloadStrategyService
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
