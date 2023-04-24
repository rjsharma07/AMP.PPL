import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Result } from 'src/models/common';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchKeyword: string = '';
  title = 'AMP.PPL';
  count: number = 0;
  resultArray: Result[] = [];
  viewFav: boolean = false;
  favoriteArray: any[] = [];
  isBookmark: boolean = false;
  filteredArray: Result[] = [];
  organizations: any[] = [];
  bookmarksAndRatings: any[] = [];
  countries: any[] = [];
  availableFilters: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getOrganizations();
  }

  getOrganizations() {
    this.service.getOrganizations(this.availableFilters).subscribe((res) => {
      this.organizations = res.Organization;
      res.Organization.map((org: any) => {
        if (!this.countries.some(country => country === org.Address.Country)) {
          this.countries.push(org.Address.Country);
        }
      })
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
    this.availableFilters.isBookMark = this.viewFav;
    this.getOrganizations();
  }

  bookmark(event: any) {
    event.isBookmarked = !event.isBookmarked;
  }

  navigateToDetails(id: number) { }

}
