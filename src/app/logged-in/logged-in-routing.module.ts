import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInComponent } from './logged-in.component'
import { MyDashboardComponent } from '../my-dashboard/my-dashboard.component';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';
import { NotificationComponent } from '../notification/notification.component';
import { LoggedInCategoryPageComponent } from '../logged-in-category-page/logged-in-category-page.component';
import { CategoryWiseListingComponent } from '../category-wise-listing-user/category-wise-listing.component';
import { SimulationDetailComponent } from '../simulation-detail-user/simulation-detail.component';
import { HomepageHomeComponent } from '../homepage-home-user/homepage-home.component';
import { SearchListUserComponent } from '../search-list-user/search-list-user';
import { HomepagePersonalComponent } from '../homepage-personal-user/homepage-personal.component';
import { HomepageBusinessComponent } from '../homepage-business-user/homepage-business.component';
import { HomepageInstitutionComponent } from '../homepage-institution-user/homepage-institution.component';
import { HomepagePartnerwithusComponent } from '../homepage-partnerwithus-user/homepage-partnerwithus.component';
import { InstitutionDemoFormComponent } from '../institution-demo-form-user/institution-demo-form.component';
import { RequestDemoFormComponent } from '../request-demo-form-user/request-demo-form.component';
import { PartnerDemoFormComponent } from '../partner-demo-form-user/partner-demo-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedInComponent
  },
  {
    path: 'allProducts',
    component: LoggedInComponent
  },
  {
    path: 'accountSettings',
    component: AccountSettingsComponent
  },
  {
    path: 'myDashboard',
    component: MyDashboardComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'allCategories',
    component: LoggedInCategoryPageComponent
  },
  {
    path: 'CategoriesWise',
    component: CategoryWiseListingComponent
  },
  {
    path: 'product/:id',
    component: SimulationDetailComponent
  },
  {
    path: 'home',
    component: HomepageHomeComponent
  },
  {
    path: 'search',
    component: SearchListUserComponent
  },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }