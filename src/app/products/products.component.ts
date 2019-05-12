import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../model/mock-products';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts = PRODUCTS;
  categories = ['Books', 'Programming', 'Random'];
  selectedCategory = null;

  constructor() { }

  getCategories() {
    const categoriesFromProducts =
      this.products.map(product => product.categories)
        .reduce((acc, cur) => acc.concat(cur));
    const uniqueCategories = Array.from(new Set(categoriesFromProducts).values());
    this.categories = uniqueCategories;
    console.log(uniqueCategories);
  }

  get products(): Product[] {
    if(this.selectedCategory == null) {
      return this.allProducts;
    }
    return this.allProducts.filter(product => product.categories.includes(this.selectedCategory));
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  ngOnInit() {
    this.getCategories();
  }

}
