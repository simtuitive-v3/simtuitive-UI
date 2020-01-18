import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { UserService } from '../service/UserService';
import { Component, OnInit } from '@angular/core';

declare let $: any

@Component({
  selector: 'app-simulation-detail',
  templateUrl: './simulation-detail.component.html',
  styleUrls: ['./simulation-detail.component.scss']
})

export class SimulationDetailComponent implements OnInit {

  product_id
  product_detail
  filteredproducts
  category

  hideImgAndIcon: Boolean = false

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService, private userService: UserService, private _data: DataService) {
    this.product_detail = []

    this.activatedRoute.params.subscribe(p => {
      this.product_id = p.id
      this.hideImgAndIcon = false
      this.getProductDetails()
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

  addToWishlist() {

    this.userService.addToWishlist(this.product_id).subscribe(data => {
      $('#wishAddedModal').modal('show')
    },
      error => {
        $('#wishRejectModal').modal('show')
      })
  }

  getProductDetails() {

    this.productService.getProductDetails(this.product_id).subscribe((data: any) => {
      this.product_detail = JSON.parse(data._body)
      this.category = this.product_detail.productCategories
      this.getFilteredProduct()
    })
  }

  getFilteredProduct() {
    console.log(this.category)
    this.productService.getFilteredProduct({ "categories": this.category, "sortBy": "POPULARITY" }).subscribe((res: any) => {
      this.filteredproducts = JSON.parse(res._body)
      console.log(this.filteredproducts, "sddsssda")
      this.filteredproducts = this.filteredproducts.filter(o => o.id !== this.product_id)
    })
  }

  playOrCloseVideoFn() {
    this.hideImgAndIcon = !this.hideImgAndIcon
  }

  openViewModalFn(data) {
    this._data.postCurrentModalDataFn(data)
    $('#logged-in-prd-modal').modal('show')
    window.scrollTo(0, 0)
  }

  windowScrollFn(product) {
    window.scroll(0, 0)
    let qp = product.productTitle.split(' ').join('-')
    this.router.navigate([`/user/product/${product.id}`], { queryParams: { '': `${qp}` } })
  }

} // Main Closing Braces
