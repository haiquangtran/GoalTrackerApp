import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyData } from '../providers/my-data';
import { GoalItem } from './shared/goal-item';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public rootPage: any = 'ListPage';
  public activePage: any = 'ListPage';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public alertCtrl: AlertController, public myData: MyData) {
    this.initializeApp();

    this.myData.loadGoals().then((data: any) => {
      let savedGoals = <GoalItem[]>JSON.parse(data);
      this.myData.setGoals(savedGoals);
    });
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public openPage(page: GoalItem, index: number) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.goal, { index: index });
    this.activePage = page;
  }

  public addPage() {
    let newPageAlert = this.alertCtrl.create({
      title: 'New Goal',
      message: 'What is your new goal?',
      inputs: [{
        name: 'name',
        placeholder: 'I want to...'
      }],
      buttons: [{
        text: 'Cancel',
        handler: data => { }
      },
      {
        text: 'Save',
        handler: data => {
          var newGoalPage = new GoalItem(data.name, 'GoalPage');
          this.myData.addGoal(newGoalPage);
          this.myData.saveGoals();
          this.openPage(newGoalPage, this.myData.getGoals().length - 1);
        }
      }]
    });

    newPageAlert.present();
  }

  public isActivePage(page): boolean {
    return page === this.activePage;
  }

}
