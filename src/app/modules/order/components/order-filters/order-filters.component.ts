import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sf-order-filters',
  templateUrl: './order-filters.component.html',
  styleUrls: ['./order-filters.component.scss']
})
export class OrderFilterComponent implements OnInit {
  @Input() public active: 1 | 2 | 3;

  constructor() { }

  ngOnInit(): void { }
}
