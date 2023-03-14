import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() keyEvent = new EventEmitter<string>();

  searchKeyword: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  call(event: any) {
    this.keyEvent.emit(this.searchKeyword)
  }

}
