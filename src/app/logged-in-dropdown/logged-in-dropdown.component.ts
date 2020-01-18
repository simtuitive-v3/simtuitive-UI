import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in-dropdown',
  templateUrl: './logged-in-dropdown.component.html',
  styleUrls: ['./logged-in-dropdown.component.scss']
})

export class LoggedInDropdownComponent implements OnInit {
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
      this.router.navigate(['/user/allProducts']);
    else
      this.router.navigate(['/user/CategoriesWise'], { queryParams: { category } });
  }
  navigateToFn(product) {
    // window.scroll(0, 0)
    let qp = product.productTitle.split(' ').join('-')
    this.router.navigate([`/user/product/${product.id}`], { queryParams: { '': `${qp}` } })
  }
} // Main Closing Braces
