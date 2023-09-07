import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cardNumber: string = '';
   cardCVV: string = '';
  cvv: string = '';
  cardMonth : string = '';
  cardYear: string = '';
  expirationMonth: string = '';
  constructor(private router: Router) { }

  onCardNumberInput(event: any) {
    // Remove non-digit characters from the input value
    const input = event.target.value.replace(/\D/g, '');

      if (input.length > 12) {
        this.cardNumber = input.slice(0, 12);
      } else {
        this.cardNumber = input;
      }
    }
  

  onCardCVVInput(event: any)
  {
    const input = event.target.value.replace(/\D/g, '');
    if (input.length > 3) {
      this.cardCVV = input.slice(0, 3);
    } else {
      this.cardCVV = input;
    }
  }

  onCardMonthYear(event: any) {
    const input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
  
    if (input.length > 2) {
      const month = input.slice(0, 2);
      const year = input.slice(2, 4);
      const formattedInput = `${month}/${year}`;
      
      // Optionally, you can store month and year separately
      this.cardMonth = month;
      this.cardYear = year;
  
      // Update the input field with the formatted value
      event.target.value = formattedInput;
    } else {
      // If the input is less than 2 characters, just store it
      this.cardMonth = input;
      this.cardYear = '';
    }
  }
  
  
  
  processPayment() {
    // Add your payment processing logic here
    console.log('Processing payment...');
    console.log('Card Number:', this.cardNumber);
    console.log('CVV:', this.cardCVV);
    console.log('Expiration Month:', this.expirationMonth);
   this.router.navigateByUrl('/success');
  }
}
