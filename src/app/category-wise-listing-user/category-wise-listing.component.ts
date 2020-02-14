import { ProductService } from '../service/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Config } from '../config';

declare let $: any

@Component({
  selector: 'app-category-wise-listing',
  templateUrl: './category-wise-listing.component.html',
  styleUrls: ['./category-wise-listing.component.scss']
})

// Main Closing braces
export class CategoryWiseListingComponent implements OnInit {

  categoryFilterOn: boolean
  roleFilterOn: boolean
  durationFilterOn: boolean
  courseLevelFilterOn: boolean
  sortByFilterOn: boolean
  category
  filteredproducts
  filteredPopularproducts
  descriptions
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
  filter

  mobFiltSidebar: boolean
  durFasTilted: boolean
  rolFasTilted: boolean
  levelFasTilted: boolean

  delimiter = new Config().delimiter

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private _data: DataService, private _router: Router) {
    this.activatedRoute.queryParams
      .subscribe(params => {
        // console.log(params); // {order: "popular"}
        if (params.category == "All") {
          this.category = {}
        }
        else {
          this.category = params.category
        }

        this.descriptions = this.description()
        this.filter = {
          "categories": [this.category], "courseLevels": [], "roles": []
        }
        this.getFilteredProduct()
        this.getFilteredPopularProduct()
        window.scroll(0, 0)
      });
  }

  description() {
    if (this.category == "Finance")
      return {
        description1: "Finance is possibly the most jargonised subject. However, anybody with arithmetic skills can master it.",
        description2: "Our Finance Simulators let you make financial mistakes and learn from them."
      }
    else if (this.category == "Operations")
      return {
        description1: "Operations is a Science, find the method to the madness during the Operations Simulations.",
        description2: "Operations management is about balancing Time-Cost-Quality & managing Stakeholder expectations. All the best" + '!'
      }
    else if (this.category == "Analytics")
      return {
        description1: "Analytics is where Tools - Domain Knowledge & Statistics meet. Master it using Simulators.",
        description2: "In today's data-driven world, your gut feel needs analytical validation. Learn the science behind Analytics."
      }
    else if (this.category == "HR")
      return {
        description1: "HR: The unofficial Psychologist, Event Planner, Peacemaker, Lawyer & Teacher. That's a lot of roles to fulfil.",
        description2: "HR Simulations dwell into People, Process and Performance Analysis and Application."
      }
    else if (this.category == "Marketing")
      return {
        description1: "The best Marketing does not feel like Marketing. Learn all about it on our Simulations.",
        description2: "Marketing is " + '"' + "What customers want to buy and how to help them do so" + '"'
      }
    else if (this.category == "Sales")
      return {
        description1: "If you are not reaching out to your customers, somebody else will.",
        description2: "Selling is a " + '"' + "Science" + '"' + " if you don't agree; you will, after completing our Sales Simulations."
      }
    else if (this.category == "General Management")
      return {
        description1: "Managing diverse aspects of a business without losing one's mind, that's General Management for you.",
        description2: "A CEO must almost always be a student of General Management. Else he becomes biased."
      }
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.categoryFilterOn = false
    this.roleFilterOn = false
    this.durationFilterOn = false
    this.courseLevelFilterOn = false
    this.sortByFilterOn = false
    this.masterRoleFilter = ['Strategic Manager', 'Tenured Manager', 'First Time Manager', 'Individual Contributor', 'Student']
    this.masterLevelsFilter = ['Fundamentals', 'Specialization', 'Strategic']
    this.masterDurationFilter = ['All', 'Less than 100 mins', 'Less than 200 mins', 'Less than 300 mins', 'Less than 400 mins', 'more than 400 mins']

    this.categoryArray = []
    this.categoryModelArray = []
    this.roleArray = []
    this.roleModelArray = []
    this.levelsArray = []
    this.levelsModelArray = []
    this.durationArray = []
    this.durations = "All";
  }
  clearAll() {
    this.categoryFilterOn = this.roleFilterOn = this.durationFilterOn = this.courseLevelFilterOn = false
    this.categoryArray = [...this.roleArray] = [...this.levelsArray] = []
    this.categoryModelArray = [...this.roleModelArray] = [...this.levelsModelArray] = []
    this.durations = "All";
    this.filter["durations"] = this.filter["categories"] = this.filter["roles"] = this.filter["courseLevels"] = []
    this.getFilteredProduct()
  }
  openDropdown(type) {
    if (type === 'Role') {
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

  rolesSelection(value) {
    var index = this.roleArray.indexOf(value)
    if (index > -1)
      this.roleArray.splice(index, 1)
    else
      this.roleArray.push(value)
    this.filter["roles"] = this.roleArray

    this.getFilteredProduct()
  }

  durationSelection(value) {
    this.durations = value
    if (value == "All")
      this.filter["durations"] = []
    else
      this.filter["durations"] = [value.replace(/ /g, '_').toUpperCase()]

    this.getFilteredProduct()
  }

  levelsSelection(value) {
    var index = this.levelsArray.indexOf(value)
    if (index > -1)
      this.levelsArray.splice(index, 1)
    else
      this.levelsArray.push(value)
    this.filter["courseLevels"] = this.levelsArray

    this.getFilteredProduct()
  }

  getFilteredProduct() {
    console.log(this.filter)
    this.productService.getFilteredProduct(this.filter).subscribe((res: any) => {
      this.filteredproducts = JSON.parse(res._body)
    })
  }

  getFilteredPopularProduct() {
    this.productService.getFilteredProduct({ "categories": [this.category], "sortBy": "POPULARITY" }).subscribe((res: any) => {
      this.filteredPopularproducts = JSON.parse(res._body)
    })
  }

  openViewModalFn(data) {
    this._data.postCurrentModalDataFn(data)
    $('#logged-in-prd-modal').modal('show')
  }

  mobFiltSidebarFn() {
    this.mobFiltSidebar = !this.mobFiltSidebar
    // $('#collapseOne').collapse('toggle')
  }

  tilt90DegfasFn(type) {
    if (type == 'two') {
      this.durFasTilted = !this.durFasTilted
      this.levelFasTilted = this.rolFasTilted = false
    }
    else if (type == 'three') {
      this.rolFasTilted = !this.rolFasTilted
      this.levelFasTilted = this.durFasTilted = false
    }
    else {
      this.levelFasTilted = !this.levelFasTilted
      this.rolFasTilted = this.durFasTilted = false
    }
  }
  navigateToFn(product) {
    window.scroll(0, 0)
    let qp = product.productTitle.split(' ').join('-')
    this._router.navigate([`/user/product/${qp}${this.delimiter}${product.courseLevel}`])
  }

} // Main Closing Braces