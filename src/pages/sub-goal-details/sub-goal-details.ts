import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GoalItem } from '../../app/shared/goal-item';

/**
 * Generated class for the SubGoalDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sub-goal-details',
  templateUrl: 'sub-goal-details.html',
})
export class SubGoalDetailsPage {
  private _myGoal: GoalItem;
  public mySubGoal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    let index = this.navParams.get('index');
    this._myGoal = <GoalItem>this.navParams.get('myGoal');
    this.mySubGoal = this._myGoal.subGoals[index];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubGoalDetails');
  }


  close() {
    this.view.dismiss();
  }

}
