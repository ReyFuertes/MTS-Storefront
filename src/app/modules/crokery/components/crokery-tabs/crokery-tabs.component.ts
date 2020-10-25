import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sf-crokery-tabs',
  templateUrl: './crokery-tabs.component.html',
  styleUrls: ['./crokery-tabs.component.scss']
})
export class CrokeryTabsComponent implements OnInit {
  public selectedNew: number = 0;
  public selectedDeli: number = 0;
  public selectedInProg: number = 0;
  
  constructor() { }

  ngOnInit(): void { }
}
