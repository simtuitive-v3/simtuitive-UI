import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Config } from "../config";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  configUrl = new Config().apiUrl

  constructor(private http: Http) { }

  getAllProducts() {
    return this.http.get(this.configUrl + '/product')
  }

  getProductDetails(id) {
    return this.http.get(this.configUrl + '/product/' + id)
  }
  getFilteredProduct(filterTypes) {
    return this.http.post(this.configUrl + '/product/filter', filterTypes)
  }
  getUserDetail() {
    return this.http.get(this.configUrl + '/user')
  }
  searchProducts(text) {
    return this.http.get(this.configUrl + '/product/search', { params: { q: text } })
  }
}
