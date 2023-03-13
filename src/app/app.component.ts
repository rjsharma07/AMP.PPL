import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Result } from 'src/models/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AMP.PPL';
  count: number = 0;
  resultArray: Result[] = [];
  viewFav: boolean = false;
  favoriteArray: any[] = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getResultData()

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
  
  // this.viewFav = !this.viewFav;
  // this.resultArray = this.testArray;
  // this.resultArray = this.resultArray.filter((i) => i.isFavourite === this.viewFav);
}
