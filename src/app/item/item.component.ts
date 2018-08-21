import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  // goToDetailPage(clickedAlbum: Album) {
  //   this.router.navigate(['albums', clickedAlbum.id]);
  // };

}
