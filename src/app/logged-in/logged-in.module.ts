import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInComponent } from './logged-in.component'
import { LoggedInRoutingModule } from './logged-in-routing.module';
import { LoggedInHeaderComponent } from '../logged-in-header/logged-in-header.component';
import { HomeDropdownComponent } from '../home-dropdown/home-dropdown.component';
import { LoggedInFooterComponent } from '../logged-in-footer/logged-in-footer.component';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';
import { MyDashboardComponent } from '../my-dashboard/my-dashboard.component';
import { LoggedInDropdownComponent } from '../logged-in-dropdown/logged-in-dropdown.component';
import { NotificationComponent } from '../notification/notification.component';
import { LoggedInCategoryPageComponent } from '../logged-in-category-page/logged-in-category-page.component';
import { CategoryWiseListingComponent } from '../category-wise-listing-user/category-wise-listing.component';
import { SimulationDetailComponent } from '../simulation-detail-user/simulation-detail.component';
import { HomepageHomeComponent } from '../homepage-home-user/homepage-home.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../service/AuthService';
import { UserService } from '../service/UserService';
import { FormsModule } from '@angular/forms';
import { SearchListUserComponent } from '../search-list-user/search-list-user';
import { HomepagePersonalComponent } from '../homepage-personal-user/homepage-personal.component';
import { HomepageBusinessComponent } from '../homepage-business-user/homepage-business.component';
import { HomepageInstitutionComponent } from '../homepage-institution-user/homepage-institution.component';
import { HomepagePartnerwithusComponent } from '../homepage-partnerwithus-user/homepage-partnerwithus.component';
import { InstitutionDemoFormComponent } from '../institution-demo-form-user/institution-demo-form.component';
import { RequestDemoFormComponent } from '../request-demo-form-user/request-demo-form.component';
import { PartnerDemoFormComponent } from '../partner-demo-form-user/partner-demo-form.component';
import { LoggedInProductModalComponent } from '../logged-in-product-modal/logged-in-product-modal.component';

@NgModule({
  declarations: [
    LoggedInComponent,
    LoggedInHeaderComponent,
    LoggedInFooterComponent,
    AccountSettingsComponent,
    MyDashboardComponent,
    LoggedInDropdownComponent,
    NotificationComponent,
    LoggedInCategoryPageComponent,
    CategoryWiseListingComponent,
    SimulationDetailComponent,
    HomepageHomeComponent,
    SearchListUserComponent,
    HomepagePersonalComponent,
    HomepageBusinessComponent,
    HomepageInstitutionComponent,
    HomepagePartnerwithusComponent,
    InstitutionDemoFormComponent,
    RequestDemoFormComponent,
    PartnerDemoFormComponent,
    LoggedInProductModalComponent
  ],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    HttpClientModule,
    FormsModule
  ], providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, UserService]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoggedInModule { }
