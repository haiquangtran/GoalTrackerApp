import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ChangeColorPopover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-change-color-popover',
  templateUrl: 'change-color-popover.html',
})
export class ChangeColorPopoverPage {
  public background: string;

  public colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.background = this.navParams.get('colour');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeColorPopover');
  }

  public close() {
    this.viewCtrl.dismiss(this.background);
  }

  public changeBackground(color) {
    this.background = color;
    this.close();
  }

}
