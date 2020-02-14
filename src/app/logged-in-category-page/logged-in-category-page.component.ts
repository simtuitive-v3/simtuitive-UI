import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

declare let $: any

@Component({
  selector: 'app-logged-in-category-page',
  templateUrl: './logged-in-category-page.component.html',
  styleUrls: ['./logged-in-category-page.component.scss']
})

export class LoggedInCategoryPageComponent implements OnInit {
  filteredproducts
  masterPoducts
  filtered

  delimiter = new Config().delimiter

  constructor(private productService: ProductService, private router: Router, private _data: DataService) { }

  ngOnInit() {
    this.masterPoducts = ['Finance', 'Marketing', 'Analytics', 'Operations', 'General Management', 'HR', 'Sales']
    this.filteredproducts = []
    this.masterPoducts.forEach(category => {
      this.getFilteredProduct(category)
    });
    window.scroll(0, 0)
  }

  getFilteredProduct(category) {
    this.productService.getFilteredProduct({ "categories": [category], "sortBy": "POPULARITY" }).subscribe((res: any) => {
      this.filteredproducts[category] = JSON.parse(res._body)
    })
  }

  navigation(category) {
    this.router.navigate(['/user/CategoriesWise'], { queryParams: { category } });
  }

  loggedInOpenModalViewFn(data) {
    this._data.postCurrentModalDataFn(data)
    $('#logged-in-prd-modal').modal('show')
  }
  navigateToFn(product) {
    window.scroll(0, 0)
    let qp = product.productTitle.split(' ').join('-')
    this.router.navigate([`/user/product/${qp}${this.delimiter}${product.courseLevel}`])
  }

} // Main Closing Braces