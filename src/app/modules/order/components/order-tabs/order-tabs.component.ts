import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sf-order-tabs',
  templateUrl: './order-tabs.component.html',
  styleUrls: ['./order-tabs.component.scss']
})
export class OrderTabsComponent implements OnInit {
  public selectedNew: number = 0;
  public selectedDeli: number = 0;
  public selectedInProg: number = 0;
  
  constructor() { }

  ngOnInit(): void { }
}
