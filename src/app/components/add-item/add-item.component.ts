import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  item: Item = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private itemService: ItemService, private router: Router) { }

  addItem() {
    this.itemService.addItem(this.item);
    this.router.navigate(['/']);
  }
}
