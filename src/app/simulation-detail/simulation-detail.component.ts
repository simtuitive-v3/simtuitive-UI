import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

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
  vttUrl: string;

  hideImgAndIcon: Boolean = false

  delimiter = new Config().delimiter


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService, private _data: DataService) {
    this.product_detail = []

    this.activatedRoute.params.subscribe(p => {
      this.product_id = p.id.split('-').join(' ')

      this.getProductDetails()
      window.scrollTo(0, 0)
      this.hideImgAndIcon = false
    });
  }

  ngOnInit() {
    // window.scrollTo(0, 0)
    // this._data.prodDetails.subscribe(details => this.product_detail = details)
  }

  getProductDetails() {

    this.productService.getProductDetails(this.product_id).subscribe((data: any) => {
      this.product_detail = JSON.parse(data._body)
      this.category = this.product_detail.productCategories

      if (this.product_detail.trailerVtt !== null) {
        this.vttUrl = encodeURI(this.product_detail.trailerVtt.substr(this.product_detail.trailerVtt.lastIndexOf('/') + 1));
        this.vttUrl = new Config().apiUrl + '/asset/vttcontent/' + this.vttUrl;
      }

      this.getFilteredProduct()
    })
  }

  getFilteredProduct() {
    this.productService.getFilteredProduct({ "categories": this.category, "sortBy": "POPULARITY" }).subscribe((res: any) => {
      this.filteredproducts = JSON.parse(res._body)
      this.filteredproducts = this.filteredproducts.filter(o => o.id !== this.product_id)
    })
  }

  playOrCloseVideoFn() {
    this.hideImgAndIcon = !this.hideImgAndIcon
  }
  ngOnDestroy() {

  }
  openViewModalFn(data) {
    this._data.postCurrentModalDataFn(data)
    $('#main-page-prd-modal').modal('show')
    window.scroll(0, 0)
  }

  windowScrollFn(product) {
    // window.scroll(0, 0)
    let qp = product.productTitle.split(' ').join('-')
    this.router.navigate([`/product/${qp}${this.delimiter}${product.courseLevel}`])
    // this.router.navigate([`/product/${product.id}`], { queryParams: { '': `${qp}` } })
    // this.router.navigateByUrl(`/product/${qp}`)
  }

} // Main Closing Braces
