import { FormsService } from '../services/forms.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReCaptchaV3Service } from 'ngx-captcha';

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
  siteKey: string;

  constructor(private _form: FormsService, private reCaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit() {
    this.siteKey = "6Lf7pMwUAAAAACOD9Gewsf-2plY3JiZoK5XGNAdm";
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

    this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      console.log('This is your token: ', token);

      const data = {
        googleIdToken : token
      };

      if (token) {
        this._form.verifyCaptchaToken(data).subscribe(res => {
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
        }, err => {
          // TODO Show error message
        });
      } else {
        // TODO Show error message
      }
    });
  }

} // Main Closing Braces
