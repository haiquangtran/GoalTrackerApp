import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MyData } from '../../providers/my-data';
import { GoalItem } from '../../app/shared/goal-item';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rootPage: any = 'HomePage';

  constructor(public myData: MyData, public alertCtrl: AlertController, public navCtrl: NavController) {
    this.myData.loadGoals().then((data: any) => {
      let savedGoals = <GoalItem[]>JSON.parse(data);
      this.myData.setGoals(savedGoals);
    });
  }

  public addPage() {
    let newPageAlert = this.alertCtrl.create({
      title: 'New Goal',
      message: 'What is your new goal?',
      inputs: [{
        name: 'name',
        placeholder: 'I want to...'
      }, {
        name: 'plan',
        placeholder: 'How will you accomplish this?'
      }, {
        name: 'tags',
        placeholder: 'Enter category name...'
      }],
      buttons: [{
        text: 'Cancel',
        handler: data => { }
      },
      {
        text: 'Save',
        handler: data => {
          var newGoalPage = new GoalItem(data.name, 'GoalPage', data.plan);
          newGoalPage.categoryLabels.push(data.tags);
          this.myData.addGoal(newGoalPage);
          this.myData.saveGoals();
          this.openPage(newGoalPage, this.myData.getGoals().length - 1);
        }
      }]
    });

    newPageAlert.present();
  }

  // Needs index parameter for deleting the page in future
  public openPage(page: GoalItem, index: number) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.goal, { index: index });
  }

  public calculateTitleFontSize(goal: GoalItem): string {
    var titleLength = goal.title.length || 0;
    if (titleLength > 0 && titleLength < 10) {
      return '5rem';
    }
    else if (titleLength >= 10 && titleLength < 15) {
      return '4rem';
    }
    else if (titleLength >= 15 && titleLength < 20) {
      return '3rem';
    }
    else if (titleLength >= 20) {
      return '2rem';
    }
    return '1rem';
  }

}
