import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: Item | undefined;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.itemService.getItemById(id);
  
    if (!this.item) {
      // Handle case where the item is not found, maybe redirect or show an error
      console.error('Item not found!');
      this.router.navigate(['/']);
    }
  }
  

  updateItem() {
    if (this.item) {
      this.itemService.updateItem(this.item.id, this.item);
      this.router.navigate(['/']);
    }
  }
}
