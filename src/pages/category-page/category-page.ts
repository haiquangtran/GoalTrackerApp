import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MyData } from '../../providers/my-data';
import { GoalItem } from '../../app/shared/goal-item';

/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category-page',
  templateUrl: 'category-page.html',
})
export class CategoryPage {
  private _goalIndex: number;
  public myGoal: GoalItem;
  public categories: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public myData: MyData, public viewCtrl: ViewController) {
    this._goalIndex = this.navParams.get('index');
    this.myGoal = this.myData.getGoal(this._goalIndex);

    this.myData.loadCategories().then((data: any) => {
      let categories = <string[]>JSON.parse(data);
      this.myData.setCategories(categories);
      this.categories = myData.getCategories();
    });
  }

  public close() {
    this.viewCtrl.dismiss();
  }

  // TODO: refactor so it's more efficient
  public isCategoryChecked(category: string): boolean {
    if (this.myGoal.categoryLabels && this.myGoal.categoryLabels.length > 0) {
      for (var i = 0; i < this.myGoal.categoryLabels.length; i++) {
        var goalCategory = this.myGoal.categoryLabels[i];
        if (category == goalCategory) {
          return true;
        }
      }
    }

    return false;
  }

  // TODO: refactor so it's more efficient
  public onCategoryChange(e: any, category: string) {
    let wasChecked = this.isCategoryChecked(category);
    if (e.checked && !wasChecked) {
      this.myGoal.categoryLabels.push(category);
    }
    else {
      let i = this.myGoal.categoryLabels.indexOf(category);

      if (i != -1) {
        this.myGoal.categoryLabels.splice(i, 1);
      }
    }
  }

}
