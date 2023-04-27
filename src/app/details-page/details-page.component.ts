import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Organization, Response } from 'src/models/Organization';
import { UserCustomFields } from 'src/models/UserCustomFields';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  organizations: Response;
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
      if (res.error == null) {
        // For JSON File
      let response: any = res.response[0];
      // For Api
      // let response: any = res.response;

      let totalrating = 0;
      // response.userRatingAndFavourite.some(x => {
      //   totalrating += x.rating;
      // })
      let avgrating = totalrating / response.userRatingAndFavouriteCount
      response.avgrating = avgrating;
      this.organizations = response;
      }
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
