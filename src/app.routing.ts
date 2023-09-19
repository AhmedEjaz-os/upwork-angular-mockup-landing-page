// Angular Imports
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

// Component Imports
import { AngularMaterialDialogComponent } from "./app/components/angular-material-dialog/angular-material-dialog.component";
import { Page1Component } from "./app/components/page-1/page-1.component";
import { Page2Component } from "./app/components/page-2/page-2.component";

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
    component: Page2Component,
    data: {
      breadcrumb: "Add New Account",
    },
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
