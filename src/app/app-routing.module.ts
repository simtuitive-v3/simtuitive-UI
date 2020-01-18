import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulationListComponent } from "./simulation-list/simulation-list.component";
import { HomeComponent } from './home/home.component';
import { SimulationDetailComponent } from './simulation-detail/simulation-detail.component';
import { HomepagePersonalComponent } from './homepage-personal/homepage-personal.component';
import { HomepageBusinessComponent } from './homepage-business/homepage-business.component';
import { HomepageInstitutionComponent } from './homepage-institution/homepage-institution.component';
import { HomepagePartnerwithusComponent } from './homepage-partnerwithus/homepage-partnerwithus.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoryWiseListingComponent } from './category-wise-listing/category-wise-listing.component';
import { ContactComponent } from './contact/contact.component';
import { RequestDemoFormComponent } from './request-demo-form/request-demo-form.component';
import { InstitutionDemoFormComponent } from './institution-demo-form/institution-demo-form.component';
import { PartnerDemoFormComponent } from './partner-demo-form/partner-demo-form.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { VerifyPwdPageComponent } from './verify-pwd-page/verify-pwd-page.component';
import { SearchListComponent } from './search-list/search-list';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: SimulationListComponent
  },
  {
    path: 'product/:id',
    component: SimulationDetailComponent
  },
  {
    path: 'personal/details',
    component: HomepagePersonalComponent
  },
  {
    path: 'business/details',
    component: HomepageBusinessComponent
  },
  {
    path: 'institution/details',
    component: HomepageInstitutionComponent
  },
  {
    path: 'partners',
    component: HomepagePartnerwithusComponent
  },
  {
    path: 'products/categories',
    component: CategoriesPageComponent
  },
  {
    path: 'products/typeCategory',
    component: CategoryWiseListingComponent
  }, {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'requestDemoForm',
    component: RequestDemoFormComponent
  },
  {
    path: 'institutionDemoForm',
    component: InstitutionDemoFormComponent
  },
  {
    path: 'partnerDemoForm',
    component: PartnerDemoFormComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./logged-in/logged-in.module').then(mod => mod.LoggedInModule)
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordPageComponent
  },
  {
    path: 'verifyEmail',
    component: VerifyPwdPageComponent
  },
  {
    path: 'search',
    component: SearchListComponent
  },
  {
    path: 'terms',
    component: TermsConditionsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyComponent
  }

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
