import { FormsService } from '../services/forms.service'
import { Component, OnInit } from '@angular/core';

declare let $: any

@Component({
  selector: 'app-request-demo-form',
  templateUrl: './request-demo-form.component.html',
  styleUrls: ['./request-demo-form.component.scss']
})

export class RequestDemoFormComponent implements OnInit {

  fName: string
  lName: string
  compEMail: string
  phNum: number
  compName: string
  compWeb: string
  compRole: string
  howDidYouHear: string = ''
  explainRequirs: string
  receiveNews: boolean
  isInputEmpty: boolean

  constructor(private _formService: FormsService) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  getInTouchFn() {
    let obj = {
      firstName: this.fName,
      lastName: this.lName,
      email: this.compEMail,
      phone: this.phNum,
      entityName: this.compName,
      entityWebsite: this.compWeb,
      contactPosition: this.compRole,
      referenceSource: this.howDidYouHear,
      businessReq: this.explainRequirs,
      promoOptIn: this.receiveNews
    }

    if (this.fName && this.compEMail && this.phNum && this.compName && this.compWeb && this.compRole && this.howDidYouHear && this.explainRequirs) {

      this._formService.createDemoReqForm(obj, 'Business').subscribe(res => {
        console.log(res.json())

        if (res.json().message) {
          $('#reqFormModal').modal('show');
          this.fName = ''; this.lName = ''; this.compEMail = ''; this.phNum = 0; this.compName = ''; this.compWeb = ''; this.compRole = ''
          this.howDidYouHear = ''; this.explainRequirs = ''; this.receiveNews = false
        }
      })
      this.isInputEmpty = false
    } else this.isInputEmpty = true
  }

} // Main Closing Braces
