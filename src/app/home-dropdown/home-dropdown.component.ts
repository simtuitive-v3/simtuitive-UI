import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-dropdown',
  templateUrl: './home-dropdown.component.html',
  styleUrls: ['./home-dropdown.component.scss']
})
export class HomeDropdownComponent implements OnInit {
  filteredProducts
  category
  constructor(private productService: ProductService, private router: Router) {
    this.filteredProducts = []
    this.category = 'Finance'
  }

  ngOnInit() {
    this.getFilteredProduct({ "categories": [this.category], "sortBy": "POPULARITY" })
  }

  categorySelection(category) {
    this.category = category
    this.getFilteredProduct({ "categories": [category], "sortBy": "POPULARITY" })
  }
  getFilteredProduct(filterType) {
    this.productService.getFilteredProduct(filterType).subscribe((data: any) => {
      this.filteredProducts = JSON.parse(data._body)
    })
  }
  navigation(category) {
    if (category == "All")
      this.router.navigate(['/products'], { queryParams: { category: category } });
    else
      this.router.navigate(['/products/typeCategory'], { queryParams: { category } });
  }

  navigateToFn(product) {
    // window.scroll(0, 0)
    let qp = product.productTitle.split(' ').join('-')
    this.router.navigate([`/product/${product.id}`], { queryParams: { '': `${qp}` } })
  }
} // Main Closing Braces
