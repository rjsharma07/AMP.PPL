import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produts-services',
  templateUrl: './produts-services.component.html',
  styleUrls: ['./produts-services.component.scss']
})
export class ProdutsServicesComponent implements OnInit {
  @Input() organizations: any;
  constructor() { }

  ngOnInit(): void {
  }

}
