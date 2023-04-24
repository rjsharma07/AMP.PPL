import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataService } from 'src/services/data.service';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RatingModule } from 'ng-starrating';
import { DetailsPageComponent } from './details-page/details-page.component';
import { PartnerLocatorComponent } from './partner-locator/partner-locator.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutComponent } from './details-page/about/about.component';
import { ProductsComponent } from './details-page/products/products.component';
import { ProdutsServicesComponent } from './details-page/produts-services/produts-services.component';
import { ResourcesComponent } from './details-page/resources/resources.component';
import { CompanyInfoComponent } from './details-page/company-info/company-info.component';
import { LocationComponent } from './details-page/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SidebarComponent,
    DetailsPageComponent,
    PartnerLocatorComponent,
    AboutComponent,
    ProductsComponent,
    ProdutsServicesComponent,
    ResourcesComponent,
    CompanyInfoComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    RatingModule,
    MatTabsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
