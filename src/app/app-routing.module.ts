import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component'; // Corrected import statement
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  // Other routes...
  { path: 'payment', component: PaymentComponent }, // Corrected component name
  { path: 'success', component: SuccessComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}