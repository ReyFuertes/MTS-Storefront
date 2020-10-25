import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sf-crokery-filters',
  templateUrl: './crokery-filters.component.html',
  styleUrls: ['./crokery-filters.component.scss']
})
export class CrokeryFiltersComponent implements OnInit {
  @Input() public active: 1 | 2 | 3;

  constructor() { }

  ngOnInit(): void { }
}
