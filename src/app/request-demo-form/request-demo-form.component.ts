import { FormsService } from '../services/forms.service'
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReCaptchaV3Service } from 'ngx-captcha';

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
  siteKey: string;

  constructor(private _formService: FormsService, private reCaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit() {
    this.siteKey = "6Lf7pMwUAAAAACOD9Gewsf-2plY3JiZoK5XGNAdm";
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

    this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      console.log('This is your token: ', token);

      const data = {
        googleIdToken : token
      };

      if (token) {
        this._formService.verifyCaptchaToken(data).subscribe(res => {
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
        }, err => {
          // TODO Show error message
        });
      } else {
        // TODO Show error message
      }
    }, {
        useGlobalDomain: false
    });
  }

} // Main Closing Braces
