import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Result } from 'src/models/common';
import { StarRatingComponent } from 'ng-starrating';
import { Router } from '@angular/router';
import { Response } from 'src/models/Organization';

@Component({
  selector: 'app-partner-locator',
  templateUrl: './partner-locator.component.html',
  styleUrls: ['./partner-locator.component.scss']
})
export class PartnerLocatorComponent implements OnInit {
  searchKeyword: string = '';
  title = 'AMP.PPL';
  count: number = 0;
  resultArray: Result[] = [];
  viewFav: boolean = false;
  favoriteArray: any[] = [];
  isBookmark: boolean = false;
  isFavourite: boolean = false;
  filteredArray: Result[] = [];
  organizations: Response[];
  bookmarksAndRatings: any[] = [];
  countries: any[] = [];
  availableFilters: any = {};
  userrating: any[];
  itemisfavourite: boolean;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getOrganizations();
  }

  getOrganizations() {
    this.service.getOrganizations(this.availableFilters).subscribe((res) => {
      if (res.error == null) {
        let response: any = res.response;
        response.map((org: Response) => {
          if (!this.countries.some(country => country === org.address.country)) {
            this.countries.push(org.address.country);
          }
          let totalrating = 0;
          org.userRatingAndFavourite.some(x => {
            totalrating += x.rating;
          })
          let avgrating = totalrating / org.userRatingAndFavouriteCount
          org.avgrating = avgrating;
        });
        this.organizations = response;
      }
    })
  }

  inputEventHandler($event: any) {
    this.searchKeyword = $event;
    if (this.searchKeyword.length >= 1) {
      this.availableFilters.partnerName = this.searchKeyword;
    }
    else if (this.searchKeyword.length < 1) {
      this.availableFilters.partnerName = "";
    }
    this.getOrganizations();
  }

  filterOrganizationHandler(filters: any) {
    this.availableFilters = filters;
    this.getOrganizations();
  }

  toggleFav() {
    this.viewFav = !this.viewFav;
    this.availableFilters.isFavourite = this.viewFav;
    this.getOrganizations();
  }

  bookmark(event: any) {
    event.userRatingAndFavourite.filter((item: { userId: string, favourite: boolean }) => item.userId === '11').forEach((item: { favourite: any; }) => { item.favourite = !item.favourite; this.itemisfavourite = item.favourite });
  }

  navigateToDetails(id: string) {
    this.router.navigate([]).then(result => { window.open(`/details/${id}`, '_blank'); });
  }
}
