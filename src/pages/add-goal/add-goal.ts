import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GoalItem } from '../../app/shared/goal-item';

/**
 * Generated class for the NewGoal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html',
})
export class AddGoalPage {
  public newGoal: GoalItem = new GoalItem();
  public category:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  createNewGoal() {
    this.newGoal.categoryLabels.push(this.category);
    this.viewCtrl.dismiss(this.newGoal);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
