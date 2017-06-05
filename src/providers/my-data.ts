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
  private _categories: string[] = [];
  private _goals: GoalItem[] = [];

  constructor(public http: HttpModule, public storage: Storage) {
    console.log('Hello MyData Provider');
  }

  // Goals

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

  // Category options

  public addCategory(category: string) {
    this._categories.push(category);
  }

  public removeCategory(index: number) {
    this._categories.splice(index, 1);
  }

  public getCategories(): string[] {
    return this._categories;
  }

  public setCategories(categories: string[]) {
    this._categories = categories || ['Health', 'Career', 'Relationships', 'Business', 'Wealth', 'Other'];
  }

  public loadCategories(): Promise<any> {
    return this.storage.get('categories');
  }

  public saveCategories() {
    let myCategories = JSON.stringify(this._categories);
    this.storage.set('categories', myCategories);
  }

}
