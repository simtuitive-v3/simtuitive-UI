import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SimulationListComponent } from './simulation-list/simulation-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageHomeComponent } from './homepage-home/homepage-home.component';
import { HomepagePersonalComponent } from './homepage-personal/homepage-personal.component';
import { HomepageBusinessComponent } from './homepage-business/homepage-business.component';
import { HomepageInstitutionComponent } from './homepage-institution/homepage-institution.component';
import { HomepagePartnerwithusComponent } from './homepage-partnerwithus/homepage-partnerwithus.component';
import { AppRoutingModule } from './app-routing.module';
import { SimulationDetailComponent } from './simulation-detail/simulation-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeDropdownComponent } from './home-dropdown/home-dropdown.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoryWiseListingComponent } from './category-wise-listing/category-wise-listing.component';
import { ContactComponent } from './contact/contact.component';
import { RequestDemoFormComponent } from './request-demo-form/request-demo-form.component';
import { InstitutionDemoFormComponent } from './institution-demo-form/institution-demo-form.component';
import { PartnerDemoFormComponent } from './partner-demo-form/partner-demo-form.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { VerifyPwdPageComponent } from './verify-pwd-page/verify-pwd-page.component';
import { UserService } from './service/UserService';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './service/AuthService';
import { SearchListComponent } from './search-list/search-list';
import { HomePageProductModalComponent } from './home-page-product-modal/home-page-product-modal.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CookieService } from 'ngx-cookie-service'
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('804444847132-tvnuqj04njgd0ri5c3st07alrbj0b90s.apps.googleusercontent.com'),

  }
]);

const cookieConfig: NgcCookieConsentConfig = {
  "cookie": {
    "domain": "https://www.simtuitive.com/home"
  },
  "position": "bottom",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "black",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#ff9100",
      "text": "#000000",
      "border": "transparent",
    }
  },
  "type": "opt-out",
  "content": {
    "message": "This website uses cookies to ensure you get the best experience on our website.",
    "dismiss": "Accept!",
    "deny": "Refuse cookies",
    "link": "",
    // "href": "https://cookiesandyou.com",
    "policy": "Cookie Policy"
  }
};

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimulationListComponent,
    HeaderComponent,
    FooterComponent,
    HomepageHomeComponent,
    HomepagePersonalComponent,
    HomepageBusinessComponent,
    HomepageInstitutionComponent,
    HomepagePartnerwithusComponent,
    SimulationDetailComponent,
    LoginComponent,
    SignupComponent,
    HomeDropdownComponent,
    ContactComponent,
    RequestDemoFormComponent,
    InstitutionDemoFormComponent,
    PartnerDemoFormComponent,
    CategoriesPageComponent,
    CategoryWiseListingComponent,
    ForgotPasswordPageComponent,
    VerifyPwdPageComponent,
    SearchListComponent,
    HomePageProductModalComponent,
    TermsConditionsComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    NgxCaptchaModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, UserService, CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
