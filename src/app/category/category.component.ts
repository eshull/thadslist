import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Item } from '../item.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = Category.categories;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(title: string, description: string, price: number, location: string, category: string) {
    new Item(title, this.categories[parseInt(category)], description, price, location);
  }

}
