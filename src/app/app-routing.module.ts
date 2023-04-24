import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { PartnerLocatorComponent } from './partner-locator/partner-locator.component';

const routes: Routes = [
  { path: '', component: PartnerLocatorComponent },
  { path: 'details/:id', component: DetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
