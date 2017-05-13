import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, NavParams } from 'ionic-angular';
import { MyData } from '../../providers/my-data';

import { GoalItem } from '../../app/shared/goal-item';

/**
 * Generated class for the Goal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html',
})
export class GoalPage {
  public myGoal: GoalItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public myData: MyData, public alertCtrl: AlertController) {
    let index = this.navParams.get('index');
    this.myGoal = this.myData.getGoal(index);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Goal' + this.myGoal);
  }

  addItem() {
    let addModal = this.modalCtrl.create('SubGoalPage');

    addModal.onDidDismiss((item: any) => {
      if (item) {
        this.saveItem(item);
      }
    })

    addModal.present();
  }

  saveItem(item: any) {
    this.myGoal.subGoals.push(item);
    this.myData.saveGoals();
  }

}
