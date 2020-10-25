import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRouteModules } from 'src/app/models/generic.model';

@Component({
  selector: 'sf-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public selected: any;
  public routeModule = IRouteModules;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!this.selected) {
      this.selected = this.routeModule.ORDERS;
      this.router.navigateByUrl('orders');
    }
  }

  public onRoute(route: IRouteModules): void {
    switch (route) {
      case IRouteModules.ORDERS:
        this.selected = this.routeModule.ORDERS;
        this.router.navigateByUrl('orders');
        break;
      case IRouteModules.CROCKERY:
        this.selected = this.routeModule.CROCKERY;
        this.router.navigateByUrl('crokery');
        break;
      case IRouteModules.DELI:
        this.selected = this.routeModule.DELI;
        this.router.navigateByUrl('deli-product');
        break;
      case IRouteModules.MENU:
        this.selected = this.routeModule.MENU;
        this.router.navigateByUrl('menu-item');
        break;
      case IRouteModules.ANALYTIC:
        this.selected = this.routeModule.ANALYTIC;
        this.router.navigateByUrl('analytic');
        break;
      case IRouteModules.DELIVERY:
        this.selected = this.routeModule.DELIVERY;
        this.router.navigateByUrl('delivery');
        break;
      case IRouteModules.COLLECTION:
        this.selected = this.routeModule.COLLECTION;
        this.router.navigateByUrl('collection');
        break;
      default:
        this.selected = this.routeModule.ORDERS;
        this.router.navigateByUrl('orders');
        break;
    }
  }
}

