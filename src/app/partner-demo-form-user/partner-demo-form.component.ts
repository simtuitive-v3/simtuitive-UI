import { FormsService } from '../services/forms.service';
import { Component, OnInit } from '@angular/core';

declare let $: any

@Component({
  selector: 'app-partner-demo-form',
  templateUrl: './partner-demo-form.component.html',
  styleUrls: ['./partner-demo-form.component.scss']
})

export class PartnerDemoFormComponent implements OnInit {

  fName: string
  lName: string
  email: string
  phNum: number
  name: string
  website: string
  // role: string
  whatToBecome: string = ''
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
      // contactPosition: this.role,
      interestedInBecomming: this.whatToBecome,
      referenceSource: this.howDidYouHear,
      businessReq: this.explainRequirs,
      promoOptIn: this.receiveNews
    }

    if (this.fName && this.email && this.phNum && this.name && this.website && this.whatToBecome && this.howDidYouHear && this.explainRequirs) {

      this._form.createDemoReqForm(obj, '').subscribe(res => {
        console.log(res.json())

        if (res.json()) {
          $('#partnerFormModal').modal('show');
          this.fName = ''; this.lName = ''; this.email = ''; this.phNum = 0; this.name = ''; this.website = ''; this.whatToBecome = ''
          this.howDidYouHear = ''; this.explainRequirs = ''; this.receiveNews = false
        }
      })
      this.isInputEmpty = false
    } else this.isInputEmpty = true
  }

} // Main Closing Braces
