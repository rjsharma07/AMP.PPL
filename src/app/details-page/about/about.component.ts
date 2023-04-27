import { Component, OnInit, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormGroup, FormControlName } from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() organizations: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }
}
