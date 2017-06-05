import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MyData } from '../../providers/my-data';

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
  private _myCategories: string[] = [];
  public allCategoryOptions: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public myData: MyData, public viewCtrl: ViewController) {
    this._myCategories = this.navParams.get('categories') || [];

    this.myData.loadCategories().then((data: any) => {
      let categoryOptions = <string[]>JSON.parse(data);
      this.myData.setCategories(categoryOptions);
      this.allCategoryOptions = myData.getCategories();
    });
  }

  public close() {
    this.viewCtrl.dismiss(this._myCategories);
  }

  // TODO: refactor so it's more efficient
  public isCategoryChecked(category: string): boolean {
    if (this._myCategories.length > 0) {
      for (var i = 0; i < this._myCategories.length; i++) {
        var goalCategory = this._myCategories[i];
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
      this._myCategories.push(category);
    }
    else {
      this.removeCategory(category);
    }
  }

  private removeCategory(category: string) {
    let i = this._myCategories.indexOf(category);

    if (i != -1) {
      this._myCategories.splice(i, 1);
    }
  }

}
