import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router'
import { loadAnalyticAction, loadAnalyticSuccessAction } from './analytic.action'
import { of } from 'rxjs';

@Injectable()
export class AnalyticEffect {
  loadAnalyticAction$ = createEffect(() => this.actions$.pipe(
    ofType(loadAnalyticAction),
    mergeMap(() => {
      return of([]).pipe(
        map((response: any) => {
          return loadAnalyticSuccessAction({ response });
        })
      )
    })
  ));

  constructor(private router: Router,
    private actions$: Actions, ) { }
}