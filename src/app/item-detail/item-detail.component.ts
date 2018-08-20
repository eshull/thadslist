import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ItemService]
})
export class ItemDetailComponent implements OnInit {
  itemId: number;
  itemToDisplay: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.params.id;
    this.itemToDisplay = this.itemService.getItemById(this.itemId);
    console.log(this.itemToDisplay);
    console.log(this.itemId);
  }

}
