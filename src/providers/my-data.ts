import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { GoalItem } from '../app/shared/goal-item';

/*
  Generated class for the MyData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyData {
  private _goals: GoalItem[] = [];

  constructor(public http: HttpModule, public storage: Storage) {
    console.log('Hello MyData Provider');
  }

  public addGoal(goal: GoalItem) {
    this._goals.push(goal);
  }

  public removeGoal(index: number) {
    this._goals.splice(index, 1);
  }

  public getGoal(index: number): GoalItem {
    if (this._goals.length > 0 && index < this._goals.length) {
      return this._goals[index];
    }
    return null;
  }

  public getGoals(): GoalItem[] {
    return this._goals;
  }

  public setGoals(goals: GoalItem[]) {
    this._goals = goals || [];
  }

  public loadGoals(): Promise<any> {
    return this.storage.get('goals');
  }

  public saveGoals() {
    let myGoals = JSON.stringify(this._goals);
    this.storage.set('goals', myGoals);
  }

}
