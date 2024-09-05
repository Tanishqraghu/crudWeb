import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' }
  ];

  constructor() { }

  getItems(): Item[] {
    return this.items;
  }

  getItemById(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }

  addItem(item: Item) {
    this.items.push({ ...item, id: this.items.length + 1 });
  }

  updateItem(id: number, updatedItem: Item) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...updatedItem, id };
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
