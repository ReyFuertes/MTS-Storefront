import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class SfButtonComponent implements OnInit {
  @Input() public label: string;
  @Input() public active: boolean;
  
  constructor() { }

  ngOnInit(): void { }
}
