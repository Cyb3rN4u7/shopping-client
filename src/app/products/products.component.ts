import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../model/mock-products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;
  categories = ['Books', 'Programming', 'Random'];
  constructor() { }

  ngOnInit() {
  }

}
