import {Injectable} from '@angular/core';
import {Actions,Effect} from '@ngrx/effects';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects{
  constructor(private actions$:Actions){}
}
