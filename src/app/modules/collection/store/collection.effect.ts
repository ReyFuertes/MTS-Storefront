import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router'
import { loadCollectionAction, loadCollectionSuccessAction } from './collection.action'
import { of } from 'rxjs';

@Injectable()
export class CollectionEffect {
  loadCollectionAction$ = createEffect(() => this.actions$.pipe(
    ofType(loadCollectionAction),
    mergeMap(() => {
      return of([]).pipe(
        map((response: any) => {
          return loadCollectionSuccessAction({ response });
        })
      )
    })
  ));

  constructor(private router: Router,
    private actions$: Actions, ) { }
}