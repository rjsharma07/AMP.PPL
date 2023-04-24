import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  @Input() organizations: any;
  constructor() { }

  ngOnInit(): void {
  }

}
