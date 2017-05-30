import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, PopoverController, AlertController, NavParams } from 'ionic-angular';
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
  private _goalIndex: number;
  public myGoal: GoalItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public myData: MyData,
    public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
    this._goalIndex = this.navParams.get('index');
    this.myGoal = this.myData.getGoal(this._goalIndex);
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad Goal' + this.myGoal);
  }

  public addItem() {
    let addModal = this.modalCtrl.create('SubGoalPage');

    addModal.onDidDismiss((item: any) => {
      if (item) {
        this.saveItem(item);
      }
    })

    addModal.present();
  }

  public saveItem(item: any) {
    this.myGoal.subGoals.push(item);
    this.myData.saveGoals();
  }

  public deleteGoal() {
    let confirm = this.alertCtrl.create({
      title: 'Delete item',
      message: 'Do you want to delete this item?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.myData.removeGoal(this._goalIndex);
            this.myData.saveGoals();
            this.navCtrl.setRoot('HomePage');
          }
        }
      ]
    });

    confirm.present();
  }


  public presentPopover() {
    let popover = this.popoverCtrl.create('ChangeColorPopoverPage', { colour: this.myGoal.colour || ''});

    popover.onDidDismiss((colour: string) => {
      if (this.myGoal) {
        this.myGoal.colour = colour;
        this.myData.saveGoals();
      }
    });

    popover.present();
  }

}
