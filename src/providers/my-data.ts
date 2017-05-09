import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyData {

  constructor(public http: HttpModule, public storage: Storage) {
    console.log('Hello MyData Provider');
  }

  getData(): Promise<any> {
    return this.storage.get('goals');
  }

  save(data: any) {
    let newData = JSON.stringify(data);
    this.storage.set('goals', newData);
  }

}
