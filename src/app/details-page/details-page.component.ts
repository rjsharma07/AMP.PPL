import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  organizations: any;
  viewFav: boolean = false;
  favoriteArray: any[] = [];
  isBookmark: boolean = false;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getOrganizationById();

  }

  getOrganizationById() {
    this.service.getOrganizations().subscribe((res) => {
      this.organizations = res.Organization[1];
    })
  }

  toggleFav() {
    this.viewFav = !this.viewFav;
    this.getOrganizationById();
  }

  bookmark(event: any) {
    event.isBookmarked = !event.isBookmarked;
  }
}
