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
  public selectedColour: string;
  public allColours: string[] = [
    '#fff', '#FFF9C4', '#FFF59D', '#FFEE58',
    '#FFE0B2', '#FFCC80', '#FFA726', '#FB8C00',
    '#E8F5E9', '#C8E6C9', '#A5D6A7', '#66BB6A',
    '#F0F4C3', '#E6EE9C', '#D4E157', '#C0CA33',
    '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5',
    '#FFCDD2', '#EF9A9A', '#EF5350', '#E53935',
    '#F8BBD0', '#F48FB1', '#F06292', '#EC407A',
    '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC',
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.selectedColour = this.navParams.get('colour');
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeColorPopover');
  }

  public close() {
    this.viewCtrl.dismiss(this.selectedColour);
  }

  public selectColour(colour: string) {
    this.selectedColour = colour;
    this.close();
  }

  public isSelected(colour: string): boolean {
    return this.selectedColour == colour;
  }

}
