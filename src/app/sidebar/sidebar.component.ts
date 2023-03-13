import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Location, Products, Specialization } from 'src/models/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  locationArray: Location[] = [];
  specializedArray: Specialization[] = [];
  productsArray: Products[] = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getLocations();
    this.getSpecializedData();
    this.getProducts();
  }

  getLocations() {
    this.service.location().subscribe((res) => {
      this.locationArray = res
    })
  }

  getSpecializedData() {
    this.service.special().subscribe((res) => {
      this.specializedArray = res
    })
  }
  getProducts() {
    this.service.product().subscribe((res) => {
      this.productsArray = res
    })
  }
}
