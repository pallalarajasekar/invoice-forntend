import { NgModule } from '@angular/core';
//import { DashboardModule } from './dashboard.module';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoiceComponent } from './invoice/invoice.component';



export const dashboardRoutes: Routes = [
    {
        path: "invoice/:id",
        component: InvoiceComponent
    },
    {
      path: "invoice-create",
      component: InvoiceCreateComponent
    },
    {
      path: "invoice-list",
      component: InvoiceListComponent
    },
    {
        path: "**",
        redirectTo: "invoice-list"
      }
];

@NgModule({
  imports: [RouterModule.forRoot(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardModule { }
