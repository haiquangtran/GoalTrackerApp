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
    let isCompletedFilter = this.navParams.get('isCompletedFilter');

    if (isCompletedFilter == undefined) {
      // Adding new goal
      this.myGoal = this.myData.getGoal(this._goalIndex);
    }
    else {
      // TODO: optimize to be more efficient
      this.myGoal = this.myData.getGoals().filter(x => x.isCompleted == isCompletedFilter)[this._goalIndex];
    }

  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad Goal' + this.myGoal);
  }

  public addItem() {
    let addModal = this.modalCtrl.create('AddSubGoalPage');

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
            // TODO: Refactor the whole filtered list approach
            // TODO: implement removing goals
            this.myData.removeGoal(this._goalIndex);
            this.myData.saveGoals();
            this.navCtrl.setRoot('HomePage');
          }
        }
      ]
    });

    confirm.present();
  }

  public showChangeColourPopup() {
    let popover = this.popoverCtrl.create('ChangeColorPopoverPage', { myGoal: this.myGoal });
    popover.present();
  }

  public goToCategoryPage() {
    let categoryPage = this.modalCtrl.create('CategoryPage', { categories: this.myGoal.categoryLabels });

    categoryPage.onDidDismiss((categories: string[]) => {
      this.myGoal.categoryLabels = categories;
      this.myData.saveGoals();
    });

    categoryPage.present();
  }

  public getBackgroundColour(): string {
    return (this.myGoal && this.myGoal.colour !== '#fff' ? this.myGoal.colour : '#ced6e3');
  }

  public toggleCompletion() {
    this.myGoal.isCompleted = !this.myGoal.isCompleted;
    this.myData.saveGoals();
  }

  public openSubGoalDetails(subGoalIndex: number) {
    let subGoalDetails = this.modalCtrl.create('SubGoalDetailsPage', { myGoal: this.myGoal, index: subGoalIndex });

    subGoalDetails.present();
  }

  public toggleSubGoalCompletion(subGoal: any) {
    subGoal.isCompleted = !subGoal.isCompleted;
  }
  
}
