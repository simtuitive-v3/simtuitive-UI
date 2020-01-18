import { Component, OnInit, HostListener } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

declare let $: any

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})

export class LoggedInComponent implements OnInit {

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

  mobFiltSidebar: boolean
  catFasTilted: boolean
  durFasTilted: boolean
  rolFasTilted: boolean
  levelFasTilted: boolean

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private _data: DataService, private _router: Router) {
    this.filter = {}
    this.getAllProducts()
  }

  @HostListener('document:click', ['$event'])
  closeMobSideBarFn(e) {
    // console.log(e.target.id)
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
      this.filter["sortBy"] = 'NEW_RELEASES'
      this.sortByFilterOn = !this.sortByFilterOn
    }
    // this.getAllProducts()
  }
  sortSelection(value) {
    this.sortValue = value
    this.filter["sortBy"] = value
    this.getAllProducts()
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
    this.productService.getFilteredProduct(this.filter).subscribe((res: any) => {
      this.products = JSON.parse(res._body)
      // console.log(this.products)
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

  openModalViewFn(data) {
    this._data.postCurrentModalDataFn(data)
    $('#logged-in-prd-modal').modal('show')
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

  navigateToFn(product) {
    window.scroll(0, 0)
    let qp = product.productTitle.split(' ').join('-')
    this._router.navigate([`/user/product/${product.id}`], { queryParams: { '': `${qp}` } })
  }

} // Main Closing Braces
