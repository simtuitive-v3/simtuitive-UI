import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Config } from '../config';
declare let $: any
@Component({
  selector: 'app-simulation-detail',
  templateUrl: './search-list-user.html',
  styleUrls: ['./search-list-user.scss']
})

export class SearchListUserComponent implements OnInit {

  categoryFilterOn: boolean
  roleFilterOn: boolean
  durationFilterOn: boolean
  courseLevelFilterOn: boolean
  sortByFilterOn: boolean
  filter
  products: Array<any>
  masterCategoryFilter
  categoryArray
  masterRoleFilter
  roleArray
  masterDurationFilter
  durationArray
  masterLevelsFilter
  levelsArray
  textSearch

  delimiter = new Config().delimiter

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private _data: DataService, private _router: Router) {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.textSearch = params.textSearch
        this.searchProducts()
      });

    this.filter = {
      "categories": [], "courseLevels": [], "roles": []
    }

  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.categoryFilterOn = false
    this.roleFilterOn = false
    this.durationFilterOn = false
    this.courseLevelFilterOn = false
    this.sortByFilterOn = false
    this.masterCategoryFilter = ['Finance', 'Marketing', 'Analytics', 'Operations', 'General Management', 'HR', 'Sales']
    this.masterRoleFilter = ['Strategic Manager', 'Tenured Manager', 'First Time Manager', 'Individual Contributor', 'Student']
    this.masterLevelsFilter = ['Fundamentals', 'Specialization', 'Strategic']
    this.masterDurationFilter = ['Less than 100 mins', 'Less than 200 mins', 'Less than 300 mins', 'Less than 400 mins', 'more than 400 mins']
    this.products = []
    this.categoryArray = []
    this.roleArray = []
    this.levelsArray = []
    this.durationArray = []
  }

  openDropdown(type) {
    if (type === 'Category') {
      this.categoryArray = []
      this.filter["categories"] = this.categoryArray
      this.categoryFilterOn = !this.categoryFilterOn
    }
    else if (type === 'Role') {
      this.roleArray = []
      this.filter["roles"] = this.roleArray
      this.roleFilterOn = !this.roleFilterOn
    }
    else if (type === 'Duration') {
      this.durationArray = []
      this.filter["durations"] = this.durationArray
      this.durationFilterOn = !this.durationFilterOn
    }
    else if (type === 'CourseLevel') {
      this.levelsArray = []
      this.filter["courseLevels"] = this.levelsArray
      this.courseLevelFilterOn = !this.courseLevelFilterOn
    }
    else if (type === 'sortBy') {
      this.sortByFilterOn = !this.sortByFilterOn
    }
    this.getAllProducts()
  }
  openViewModalFn(data) {
    this._data.postCurrentModalDataFn(data)
    $('#logged-in-prd-modal').modal('show')
    window.scroll(0, 0)
  }
  getAllProducts() {
    this.productService.getFilteredProduct(this.filter).subscribe((res: any) => {
      this.products = JSON.parse(res._body)
      console.log(this.products)
    })
  }
  categorySelection(value) {
    var index = this.categoryArray.indexOf(value)
    if (index > -1)
      this.categoryArray.splice(index, 1)
    else
      this.categoryArray.push(value)
    this.filter["categories"] = this.categoryArray

    this.getAllProducts()
  }
  rolesSelection(value) {
    var index = this.roleArray.indexOf(value)
    if (index > -1)
      this.roleArray.splice(index, 1)
    else
      this.roleArray.push(value)
    this.filter["roles"] = this.roleArray

    this.getAllProducts()
  }
  durationSelection(value) {

    this.filter["durations"] = [value.replace(/ /g, '_').toUpperCase()]

    this.getAllProducts()
  }
  levelsSelection(value) {
    var index = this.levelsArray.indexOf(value)
    if (index > -1)
      this.levelsArray.splice(index, 1)
    else
      this.levelsArray.push(value)
    this.filter["courseLevels"] = this.levelsArray

    this.getAllProducts()
  }
  searchProducts() {
    this.productService.searchProducts(this.textSearch).subscribe((data: any) => {
      this.products = JSON.parse(data._body)
    })
  }

  navigateToFn(product) {
    window.scroll(0, 0)
    let qp = product.productTitle.split(' ').join('-')
    this._router.navigate([`/user/product/${qp}${this.delimiter}${product.courseLevel}`])
  }

} // Main Closing Braces
