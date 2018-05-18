import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre:string = "";
  edad:number = 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("nombre");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrarConParametros() {
    this.viewCtrl.dismiss({'edad':15});

  }

  cerrarSinParametros() {
    this.viewCtrl.dismiss();

  }

}
