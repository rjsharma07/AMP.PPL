import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Result } from 'src/models/common';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchKeyword: string = '';
  title = 'AMP.PPL';
  count: number = 0;
  resultArray: Result[] = [];
  viewFav: boolean = false;
  favoriteArray: any[] = [];
  isBookmark: boolean = false;
  filteredArray: Result[] = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getResultData()
  }

  inputEventHandler($event: any) {
    this.searchKeyword = $event;
    if (this.searchKeyword.length > 1) {
      this.resultArray.forEach((item) => {
        if (item.name.toLowerCase().includes(this.searchKeyword.toLowerCase())) {
          this.filteredArray.push(item)
        }
      })
      this.resultArray = this.filteredArray;
    }
    else if (this.searchKeyword.length < 1) {
      this.filteredArray = [];
      this.getResultData();
    }
  }

  filterProductHandler($event: any) {
    console.log($event);

  }

  filterSpecializationHandler($event: any) {
    this
    console.log($event);
  }

  getResultData() {
    this.service.result().subscribe((res) => {
      this.count = res.length;
      this.resultArray = res;
    })
  }

  toggleFav() {
    this.viewFav = !this.viewFav;
    if (this.viewFav) {
      this.resultArray = this.resultArray.filter((i) => i.isFavourite === true)
    }
    else {
      this.getResultData();
    }
  }

  getBackground(index: number) {
    return index % 2 === 0 ? 'bg-light' : 'bg-dark';
  }

  bookmark(event: any) {
    event.isBookmarked = !event.isBookmarked;
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    `Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`
  }
}
