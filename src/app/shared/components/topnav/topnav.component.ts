import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sf-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopNavComponent implements OnInit {
  public svgPath: string = environment.imgPath;
  constructor() { }

  ngOnInit(): void { }
}
