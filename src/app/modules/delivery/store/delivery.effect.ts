import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router'
import { loadDeliveryAction, loadDeliverySuccessAction } from './delivery.action'
import { of } from 'rxjs';

@Injectable()
export class DeliveryEffect {
  loadDeliveryAction$ = createEffect(() => this.actions$.pipe(
    ofType(loadDeliveryAction),
    mergeMap(() => {
      return of([]).pipe(
        map((response: any) => {
          return loadDeliverySuccessAction({ response });
        })
      )
    })
  ));

  constructor(private router: Router,
    private actions$: Actions, ) { }
}