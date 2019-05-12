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
  productsPerPage = 2;
  selectedPage = 1;

  constructor() { }

  getCategories() {
    const categoriesFromProducts =
      this.allProducts.map(product => product.categories)
        .reduce((acc, cur) => acc.concat(cur));
    const uniqueCategories = Array.from(new Set(categoriesFromProducts).values());
    this.categories = uniqueCategories;
    console.log(uniqueCategories);
  }


  get products(): Product[] {

    if (this.numberOfProducts < this.productsPerPage) {
      this.productsPerPage = this.numberOfProducts;
    }
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    if (this.selectedCategory == null) {
      return this.allProducts.slice(pageIndex, pageIndex + this.productsPerPage);
    }
    return this.allProducts.filter(product => product.categories.includes(this.selectedCategory))
    .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get numberOfProducts(): number {
    if (this.selectedCategory == null) {
      return this.allProducts.length;
    }
    return this.allProducts.filter(product => product.categories.includes(this.selectedCategory)).length;
  }

  get pageNumbers(): number[] {
    console.log(this.products.length);
    const pages =  Array(Math.ceil(this.numberOfProducts / this.productsPerPage))
    .fill(0).map((x, i) => i + 1);
    console.log(pages);
    return pages;
  }
  get availableProducts(): number[] {
    return [1, 2, 4, 8];
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    if (this.numberOfProducts < newSize) {
      this.productsPerPage = this.numberOfProducts;
    } else {
      this.productsPerPage = Number(newSize);
    }

    this.changePage(1);
  }

  ngOnInit() {
    this.getCategories();
  }

}
