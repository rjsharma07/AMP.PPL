import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Location, Products, Specialization } from 'src/models/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() filterSpecialization = new EventEmitter();
  @Output() filterProduct = new EventEmitter();
  locationArray: Location[] = [];
  specializedArray: Specialization[] = [];
  productsArray: Products[] = [];
  panelOpenState: boolean = true;
  filterOptionsSpecialization: any[] = [];
  filterOptionsProducts: any[] = [];

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

  toggleProducts(item: any) {
    this.filterOptionsProducts.push(item)
    this.filterProduct.emit(this.filterOptionsProducts)
  }

  toggleSpecializtion(item: any) {
    this.filterOptionsSpecialization.push(item)
    this.filterSpecialization.emit(this.filterOptionsSpecialization)
  }
}
