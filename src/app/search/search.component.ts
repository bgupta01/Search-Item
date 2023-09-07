import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor() {}
  searchTerm: string = '';
  items: { description: string, imageUrl: string }[] = [
    { description: 'BlueBerry', imageUrl: 'assets/img/blueberry.jpg' },
    { description: 'Orange', imageUrl: 'assets/img/orange.jpg' },
    { description: 'Mango', imageUrl: 'assets/img/mango.jpg' },
    { description: 'Pineapple', imageUrl: 'assets/img/pineapple.jpg' },
    { description: 'Strawberry', imageUrl: 'assets/img/strawberry.jpeg' },
  ];
  filteredItems: { description: string, imageUrl: string }[] = [...this.items];

  get filterItems() {
    return this.filteredItems = this.items.filter((image) =>
      image.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    }

  }

