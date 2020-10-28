import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router'
import { loadMenuItemAction, loadMenuItemSuccessAction } from './menu-item.action'
import { of } from 'rxjs';

@Injectable()
export class MenuItemEffect {
  loadMenuItemAction$ = createEffect(() => this.actions$.pipe(
    ofType(loadMenuItemAction),
    mergeMap(() => {
      return of([]).pipe(
        map((response: any) => {
          return loadMenuItemSuccessAction({ response });
        })
      )
    })
  ));

  constructor(private router: Router,
    private actions$: Actions, ) { }
}