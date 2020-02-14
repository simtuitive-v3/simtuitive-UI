import { ProductService } from '../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

declare let $: any

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})

export class CategoriesPageComponent implements OnInit {

  filteredproducts
  masterPoducts
  filtered
  category

  constructor(private productService: ProductService, private router: Router, private _data: DataService) { }

  ngOnInit() {
    this.masterPoducts = ['Finance', 'Marketing', 'Analytics', 'Operations', 'General Management', 'HR', 'Sales']
    this.filteredproducts = []
    this.masterPoducts.forEach(category => {
      this.getFilteredProduct(category)
    });
  }

  getFilteredProduct(category) {
    this.productService.getFilteredProduct({ "categories": [category], "sortBy": "POPULARITY" }).subscribe((res: any) => {
      this.filteredproducts[category] = JSON.parse(res._body)
    })
  }

  navigation(category) {
    this.router.navigate(['/products/typeCategory'], { queryParams: { category } });
  }

  openPrdExpandModalViewFn(product) {
    this._data.postCurrentModalDataFn(product)
    $('#main-page-prd-modal').modal('show')
  }

  openAndCloseModalFn() {
    $('#prod-expand-view-modal').modal('hide')
    $('#loginModal').modal('show')
  }
  navigateToFn(sim) {
    let qp = sim.productTitle.split(' ').join('-')
    this.router.navigate([`/product/${qp}_${sim.courseLevel}`])
  }

} // Main Closing Braces
