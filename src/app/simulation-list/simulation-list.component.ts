import { Component, OnInit } from '@angular/core';
import { ProductService } from "../service/product.service";
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Config } from '../config';

declare let $: any

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.component.html',
  styleUrls: ['./simulation-list.component.scss']
})
export class SimulationListComponent implements OnInit {

  categoryFilterOn: boolean
  roleFilterOn: boolean
  durationFilterOn: boolean
  courseLevelFilterOn: boolean
  sortByFilterOn: boolean
  filter
  products: Array<any>
  masterCategoryFilter
  categoryArray
  categoryModelArray
  masterRoleFilter
  roleArray
  roleModelArray
  masterDurationFilter
  durationArray
  durationModalArray
  durations
  masterLevelsFilter
  levelsArray
  levelsModelArray
  sortValue
  isCardDetail: boolean

  productData

  mobFiltSidebar: boolean
  catFasTilted: boolean
  durFasTilted: boolean
  rolFasTilted: boolean
  levelFasTilted: boolean

  delimiter = new Config().delimiter

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private _router: Router, private _data: DataService) {
    // this.activatedRoute.queryParams
    //   .subscribe(params => {
    //     console.log(params); // {order: "popular"}
    //     if (params.category == "All") {
    //       this.filter = {}
    //     }
    //     else {
    //       this.filter = { "categories": [params.category] }
    //     }
    //     this.getAllProducts()
    //   });
    this.filter = {}
    this.getAllProducts()
    this.filter = {
      "categories": [], "courseLevels": [], "roles": [], duration: [], "sortBy": "NEW_RELEASES"
    }
    this.productData = {}
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
    this.masterDurationFilter = ['All', 'Less than 100 mins', 'Less than 200 mins', 'Less than 300 mins', 'Less than 400 mins', 'more than 400 mins']
    this.products = []
    this.categoryArray = []
    this.categoryModelArray = []
    this.roleArray = []
    this.roleModelArray = []
    this.levelsArray = []
    this.levelsModelArray = []
    this.durationArray = []
    this.durations = "All";
    this.sortValue = 'NEW_RELEASES'
  }

  // currentID
  openViewModalFn(product, i) {

    this._data.postCurrentModalDataFn(product)
    // this.isCardDetail = true
    // this.currentID = i
    // $(`#collapseid${i}`).toggle()
    $('#main-page-prd-modal').modal('show')
  }
  openDropdown(type) {
    if (type === 'Category') {
      this.roleFilterOn = this.durationFilterOn = this.courseLevelFilterOn = false
      // this.categoryArray = []
      // this.filter["categories"] = this.categoryArray
      this.categoryFilterOn = !this.categoryFilterOn
    }
    else if (type === 'Role') {
      this.categoryFilterOn = this.durationFilterOn = this.courseLevelFilterOn = false
      // this.roleArray = []
      // this.filter["roles"] = this.roleArray
      this.roleFilterOn = !this.roleFilterOn
    }
    else if (type === 'Duration') {
      this.categoryFilterOn = this.roleFilterOn = this.courseLevelFilterOn = false;
      // this.durationArray = []
      // this.filter["durations"] = this.durationArray
      // if (this.durationArray.length)
      // (<HTMLFormElement>document.getElementById(this.duration)).checked = true
      this.durationFilterOn = !this.durationFilterOn
    }
    else if (type === 'CourseLevel') {
      this.categoryFilterOn = this.roleFilterOn = this.durationFilterOn = false
      // this.levelsArray = []
      // this.filter["courseLevels"] = this.levelsArray
      this.courseLevelFilterOn = !this.courseLevelFilterOn
    }
    else if (type === 'sortBy') {
      // this.filter["sortBy"] = 'NEW_RELEASES'
      this.sortByFilterOn = !this.sortByFilterOn
    }
    // this.getAllProducts()
  }
  clearAll() {
    this.categoryFilterOn = this.roleFilterOn = this.durationFilterOn = this.courseLevelFilterOn = false
    this.categoryArray = [...this.roleArray] = [...this.levelsArray] = []
    this.categoryModelArray = [...this.roleModelArray] = [...this.levelsModelArray] = []
    this.durations = "All";
    this.filter["durations"] = this.filter["categories"] = this.filter["roles"] = this.filter["courseLevels"] = []
    this.getAllProducts()
  }

  getAllProducts() {
    console.log(this.filter)
    this.productService.getFilteredProduct(this.filter).subscribe((res: any) => {
      // console.log(res)
      this.products = JSON.parse(res._body)

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
    this.durations = value
    if (value == "All")
      this.filter["durations"] = []
    else
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

  openProductExpandView(prodData) {
    this.productData = prodData
  }
  sortSelection(value) {
    this.sortValue = value
    this.filter["sortBy"] = value
    this.getAllProducts()
  }

  openAndCloseModalToRouteFn() {
    $('#prodExpandViewModal').modal('hide')
    $('#loginModal').modal('show')
    // this._router.navigateByUrl('/products')
  }

  mobFiltSidebarFn() {
    this.mobFiltSidebar = !this.mobFiltSidebar
    // $('#collapseOne').collapse('toggle')
  }

  tilt90DegfasFn(type) {
    if (type == 'one') {
      this.catFasTilted = !this.catFasTilted
      this.durFasTilted = this.levelFasTilted = this.rolFasTilted = false
    }
    else if (type == 'two') {
      this.durFasTilted = !this.durFasTilted
      this.levelFasTilted = this.rolFasTilted = false
      this.catFasTilted = true
    }
    else if (type == 'three') {
      this.rolFasTilted = !this.rolFasTilted
      this.levelFasTilted = this.durFasTilted = false
      this.catFasTilted = true
    }
    else {
      this.levelFasTilted = !this.levelFasTilted
      this.rolFasTilted = this.durFasTilted = false
      this.catFasTilted = true
    }
  }

  navigateToFn(sim) {
    // this._data.getProdDetailsFn(sim.id)
    let qp = sim.productTitle.split(' ').join('-')
    this._router.navigate([`/product/${qp}${this.delimiter}${sim.courseLevel}`])
    // this._router.navigateByUrl(`/product/${qp}`)
  }
} // Main Closing Braces
