import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyData } from '../providers/my-data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = 'HomePage';
  activePage: any = 'HomePage';

  // TODO:
  goals: Array<'GoalPage'>;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public alertCtrl: AlertController, public myDataService: MyData) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'GoalPage' },
      { title: 'List', component: 'ListPage' }
    ];

    // this.myDataService.getData().then((data) => {
    //   this.pages = JSON.parse(data);
    // });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  addPage() {
    let newPageAlert = this.alertCtrl.create({
      title: 'New Goal',
      message: 'What is your new goal?',
      inputs: [{
        name: 'name',
        placeholder: 'I want to...'
      }],
      buttons: [{
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          console.log('Saved clicked' + data.name);
          var newGoalPage = { title: data.name, component: 'GoalPage' };
          this.pages.push(newGoalPage);
          this.nav.push(newGoalPage.component);
          // this.myDataService.save(this.pages);
        }
      }]
    });

    newPageAlert.present();
  }

  isActivePage(page): boolean {
    return page === this.activePage;
  }

}
