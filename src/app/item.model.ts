import { Category } from './category.model';

export class Item {
  static items: Item[] = [];

  constructor(public title: string, public category: Category, public description: string, public price: number, public location: string) {
    Item.items.push(this);
  }

}
