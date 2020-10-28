import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router'
import { loadCrokeryAction, loadCrokerySuccessAction } from './crokery.action'
import { of } from 'rxjs';

@Injectable()
export class CrokeryEffect {
  loadCrokeryAction$ = createEffect(() => this.actions$.pipe(
    ofType(loadCrokeryAction),
    mergeMap(() => {
      return of([]).pipe(
        map((response: any) => {
          return loadCrokerySuccessAction({ response });
        })
      )
    })
  ));

  constructor(private router: Router,
    private actions$: Actions, ) { }
}