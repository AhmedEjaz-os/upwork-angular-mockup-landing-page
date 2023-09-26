// Angular Imports
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

// Component Imports
import { Page1Component } from "./app/components/page-1/page-1.component";
import { Page2Component } from "./app/components/page-2/page-2.component";
import { Page3Component } from "./app/components/page-3/page-3.component";

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
  },
  {
    path: "edit-license",
    component: Page3Component,
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
