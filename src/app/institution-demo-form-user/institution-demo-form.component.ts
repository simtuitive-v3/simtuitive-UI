import { FormsService } from '../services/forms.service'
import { Component, OnInit } from '@angular/core';

declare let $: any

@Component({
  selector: 'app-institution-demo-form',
  templateUrl: './institution-demo-form.component.html',
  styleUrls: ['./institution-demo-form.component.scss']
})

export class InstitutionDemoFormComponent implements OnInit {

  fName: string
  lName: string
  email: string
  phNum: number
  name: string
  website: string
  role: string
  howDidYouHear: string = ''
  explainRequirs: string
  receiveNews: boolean
  isInputEmpty: boolean

  constructor(private _form: FormsService) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  getInTouchFn() {
    let obj = {
      firstName: this.fName,
      lastName: this.lName,
      email: this.email,
      phone: this.phNum,
      entityName: this.name,
      entityWebsite: this.website,
      contactPosition: this.role,
      referenceSource: this.howDidYouHear,
      businessReq: this.explainRequirs,
      promoOptIn: this.receiveNews
    }

    if (this.fName && this.email && this.phNum && this.name && this.website && this.role && this.howDidYouHear && this.explainRequirs) {
      this._form.createDemoReqForm(obj, 'Institution').subscribe(res => {
        console.log(res.json())

        if (res.json().message) {
          $('#instFormModal').modal('show');
          this.fName = ''; this.lName = ''; this.email = ''; this.phNum = 0; this.name = ''; this.website = ''; this.role = ''
          this.howDidYouHear = ''; this.explainRequirs = ''; this.receiveNews = false
        }
      })
      this.isInputEmpty = false
    } else this.isInputEmpty = true
  }

} // Main Closing Braces
