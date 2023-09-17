// Angular Imports
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

// Component Imports
import { AppComponent } from "./app/app.component";
import { AngularMaterialDialogComponent } from "./app/components/angular-material-dialog/angular-material-dialog.component";
import { HeaderComponent } from "./app/components/header/header.component";
import { HomeComponent } from "./app/components/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      breadcrumb: "HOME",
    },
  },
  {
    path: "user",
    component: HeaderComponent,
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
