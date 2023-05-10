import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Organization, Response } from 'src/models/Organization';
import { UserCustomFields, FormResponse } from 'src/models/UserCustomFields';
import { UpdatedCustomField, FormData } from 'src/models/UpdatedCustomFields';

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
  availableFormData: FormResponse[];
  updatedFormData: FormData[];
  public selectedTabIndex = 0;
  public id: any;
  public CompanyId: string;
  public ModuleId: any;
  public UserId: string;
  public ModuleRecordId: any;


  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.getOrganizationById();
    })
    // this.getForms();
    this.getFormsById();
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
      if (res.error == null) {
        let response: any = res.response;
        this.availableFormData = response;
      }
    })
  }

  getFormsById() {
    // Static Values For Params
    this.CompanyId = '3fa85f64-5717-4562-b3fc-2c963f66afb6';
    this.ModuleId = 2;
    this.UserId = "6ebee14a-ae0c-4fca-a0a2-2c5bda6bd5c2";
    this.ModuleRecordId = "65de7199-c69e-48d9-80b3-fe24502df516";
    this.service.getFormsById(this.CompanyId,this.ModuleId,this.UserId,this.ModuleRecordId).subscribe((res) => {
      if (res.error == null) {
        let response: any = res.response;
        response.forEach((item: any) => {
          item.field.sort((a: any, b: any) => a.fieldSequence - b.fieldSequence)
        })
        this.updatedFormData = response;
      }
    })
  }
}
