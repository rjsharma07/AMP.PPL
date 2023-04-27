import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { AvailableFilters, Location, Products, Specialization } from 'src/models/common'; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() countries: any[];
  @Output() filter = new EventEmitter();
  locationArray: Location[] = [];
  specializedArray: Specialization[] = [];
  productsArray: Products[] = [];
  panelOpenState: boolean = true;
  filterOptionsSpecialization: any[] = [];
  filterOptionsProducts: any[] = [];
  filters: any[];
  selected = "All";
  selectedFilters: string[];
  availableFilters: AvailableFilters = {
    countryName: "",
    appliedFilter: []
  }

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getFilters();
  }

  getFilters() {
    this.service.getFilters().subscribe((res) => {
      this.filters = res.response[0].categoryFilters;
    });
  }

  selection(event: any) {}

  toggleSpecialization(filter: any) {}

  filterOrganization(event: any, filter: string) {
    event.checked ? this.availableFilters.appliedFilter.push(filter) : 
      this.availableFilters.appliedFilter.splice(this.availableFilters.appliedFilter.indexOf(filter), 1);
    this.filter.emit(this.availableFilters);
  }

  filterOrganizationByCountry(event: string) {
    this.availableFilters.countryName = event;
    this.filter.emit(this.availableFilters);
  }
}
