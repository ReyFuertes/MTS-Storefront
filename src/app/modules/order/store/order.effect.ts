import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router'
import { loadOrderAction, loadOrderSuccessAction } from './order.action'
import { of } from 'rxjs';

@Injectable()
export class OrderEffect {
  loadOrderAction$ = createEffect(() => this.actions$.pipe(
    ofType(loadOrderAction),
    mergeMap(() => {
      return of([]).pipe(
        map((response: any) => {
          return loadOrderSuccessAction({ response });
        })
      )
    })
  ));

  constructor(private router: Router,
    private actions$: Actions, ) { }
}