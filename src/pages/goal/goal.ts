import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController } from 'ionic-angular';
import { MyData } from '../../providers/my-data';
import { SubGoalPage } from '../sub-goal/sub-goal';

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
  public name: string;
  public subGoals: any[] = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public myDataService: MyData, public alertCtrl: AlertController) {
    this.myDataService.getData().then((subGoals: any) => {
      if (subGoals) {
        this.subGoals = JSON.parse(subGoals);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Goal');
  }

  addItem() {
    let addModal = this.modalCtrl.create(SubGoalPage);

    addModal.onDidDismiss((item: any) => {
      if (item) {
        this.saveItem(item);
      }
    })

    addModal.present();
  }

  saveItem(item: any) {
    this.subGoals.push(item);
    this.myDataService.save(this.subGoals);
  }

}
