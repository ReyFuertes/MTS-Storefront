import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sf-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SfSearchComponent implements OnInit {
  @Input() public placeholder: string;
  constructor() { }

  ngOnInit(): void { }
}
