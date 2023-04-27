import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Organization } from 'src/models/Organization';
import { UserCustomFields } from 'src/models/UserCustomFields';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  organizations: Organization;
  viewFav: boolean = false;
  favoriteArray: any[] = [];
  isBookmark: boolean = false;
  availableFormData: UserCustomFields[];
  public selectedTabIndex = 0;
  public id: any;

  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.getOrganizationById();
    })
    this.getForms();
  }

  getOrganizationById() {
    this.service.getOrganizationById(this.id).subscribe((res) => {
      // if (res.error == null) {
      // let response: Organization = res.response;
      // let totalrating = 0;
      // response.userRatingAndFavourite.some(x => {
      //   totalrating += x.rating;
      // })
      // let avgrating = totalrating / response.userRatingAndFavouriteCount
      // response.avgrating = avgrating;
      // this.organizations = response;
      // }
      let totalrating = 0;
      res[this.id - 1].userRatingAndFavourite.some(x => {
        totalrating += x.rating;
      })
      let avgrating = totalrating / res[this.id - 1].userRatingAndFavouriteCount
      res[this.id - 1].avgrating = avgrating;
      this.organizations = res[this.id - 1];
    })
  }

  toggleFav() {
    this.viewFav = !this.viewFav;
    this.getOrganizationById();
  }

  bookmark(event: any) {
    event.isBookmarked = !event.isBookmarked;
  }

  getForms() {
    this.service.getForms().subscribe((res) => {
      this.availableFormData = res;
    })
  }
}
