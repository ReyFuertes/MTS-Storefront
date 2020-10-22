import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sf-orders-container',
  templateUrl: './orders-container.component.html',
  styleUrls: ['./orders-container.component.scss']
})
export class OrdersContainerComponent implements OnInit {
  public listItems: Array<{orderNum: string, time: string}> = [];

  constructor() {
    for (let i = 0; i < 7; i++) {
      this.listItems.push({ orderNum: 'ORDER NUMBER', time: '12:42' });
    }
  }

  ngOnInit(): void { }
}
