import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




import { Routes, RouterModule } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { HighLightDirective } from './high-light.directive';
import { TrimPipe } from './trim.pipe';
import { PaymentComponent } from './payment/payment.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './filter.pipe';
import { SuccessComponent } from './success/success.component'; // Import your custom filter pipe

const routes :Routes = [

  {path: 'product', component: ProductComponent},
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HighLightDirective,
    FilterPipe ,
    
    SuccessComponent,
    TrimPipe,
         PaymentComponent
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }