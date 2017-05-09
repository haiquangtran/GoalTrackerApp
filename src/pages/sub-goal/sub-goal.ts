import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SubGoal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sub-goal',
  templateUrl: 'sub-goal.html',
})
export class SubGoalPage {
  public newItem: any = { title: '', description: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubGoal');
  }

  saveItem() {
    this.view.dismiss(this.newItem);
  }

  close() {
    this.view.dismiss();
  }

}
