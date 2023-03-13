import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Result, Location, Products, Specialization } from 'src/models/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AMP.PPL';
  count: number = 0;
  resultArray: Result[] = [];
  locationArray: Location[] = [];
  productsArray: Products[] = [];
  specializaionArray: Specialization[] = [];
  viewFav : boolean = false;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getLocationData()
    this.getProductData()
    this.getResultData()
    this.getSpecializedData()
    
  }

  getLocationData() {
    this.service.location().subscribe((res) => {
      // console.log(res)
    })
  }
  getProductData() {
    this.service.product().subscribe((res) => {
      // console.log(res)
    })
  }
  getSpecializedData() {
    this.service.special().subscribe((res) => {
      // console.log(res)
    })
  }
  getResultData() {
    this.service.result().subscribe((res) => {
      this.count = res.length;
      this.resultArray = res;
    })
  }

  toggleFav(){
    
  }
}
