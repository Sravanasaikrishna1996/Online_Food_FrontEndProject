import { Component } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  searchTerm: string = '';
  products: any[] = [
    { name: 'Chicken Biryani', price: 500, imageurl: 'assets/Images/Biryani.jpg' },
    { name: 'Veg Biryani', price: 200, imageurl: 'assets/Images/Veg-Biryani.jpg' },
    { name: 'Cocktail', price: 300, imageurl: 'assets/Images/cocktail.jpg' },
    { name: 'Icecream', price: 200, imageurl: 'assets/Images/icecream.jpg' },
    { name: 'Manchuria', price: 100, imageurl: 'assets/Images/manchuria.jpg' },
    { name: 'Pizza', price: 400, imageurl: 'assets/Images/pizza.jpg' }
  ];
  product!: Product;

  constructor(private router: Router) { }
 

  searchName: string = '';
  filteredProducts: any[] = this.products;

   // Define a method to filter products based on searchName
   filterProducts() {
    if (!this.searchName) {
      return this.products; // Return all products if searchName is empty
    }

    const lowerSearchName = this.searchName.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(lowerSearchName)
    );
  }
 
  
  onSave() {
    
    console.log("Payment button clicked");
    this.router.navigateByUrl('/payment'); // Use the route path, not the HTML file path
  }
}
