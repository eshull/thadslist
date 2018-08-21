import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mock-items';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'

})
export class ItemService {
  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.items = database.list('items');
  }

  getItems() {
    return this.items;
  }

  // getItems() {
  //   return ITEMS;
  // }

  getItemById(itemId: number){
    for (var i = 0; i <= ITEMS.length - 1; i++) {
      if (ITEMS[i].id == itemId) {
        return ITEMS[i];
      }
    }
  }

}
