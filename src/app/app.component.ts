import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  searchTerm: string = '';
  onSearch() {
  
    console.log('Search term:', this.searchTerm);

   
  }
}
