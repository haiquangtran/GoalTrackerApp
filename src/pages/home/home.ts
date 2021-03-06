import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MyData } from '../../providers/my-data';
import { GoalItem } from '../../app/shared/goal-item';
import { Settings } from '../../app/shared/settings';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public isCompletedFilter: boolean = false;
  public goalGridColumnCount: number;
  public isDataLoaded: boolean = false;
  public rootPage: any = 'HomePage';

  constructor(public myData: MyData, public modalCtrl: ModalController, public navCtrl: NavController) {
    this.myData.loadGoals().then((data: any) => {
      let savedGoals = <GoalItem[]>JSON.parse(data);
      this.myData.setGoals(savedGoals);
      this.isDataLoaded = true;
    });

    this.myData.loadSettings().then((data: any) => {
      let settings = <Settings>JSON.parse(data) || new Settings();
      this.myData.setSettings(settings);
      this.goalGridColumnCount = this.myData.getSettings().columnCount;
    });
  }

  public addPage() {
    let addGoal = this.modalCtrl.create('AddGoalPage');

    addGoal.present();
  }

  // Needs index parameter for deleting the page in future
  public openPage(index: number, filter: boolean) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push('GoalPage', { index: index, isCompletedFilter: filter });
  }

  public changeGridColumnCount() {
    if (this.goalGridColumnCount >= 2) {
      this.goalGridColumnCount = 0;
    }
    this.goalGridColumnCount++;

    this.myData.getSettings().columnCount = this.goalGridColumnCount;
    this.myData.saveSettings();
  }

  // TODO: move to directive
  public calculateTitleFontSize(goal: GoalItem): string {
    var titleLength = goal && goal.title ? goal.title.length : 0;
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

  public getFilteredGoals(goals: GoalItem[], isCompletedFilter: boolean = false): GoalItem[] {
    return this.myData.getGoals().filter(x => x.isCompleted == isCompletedFilter);
  }

  public setIsCompletedFilter(isTrue: boolean) {
    this.isCompletedFilter = isTrue;
  }

}
