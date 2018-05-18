import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from '../index.paginas';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  acivarPrincipal() {
    this.navCtrl.parent.select(0);
  }

  mostrarModal() {
    let modal = this.modalCtrl.create( ModalPage, {nombre:'Agustin', edad:24} );
    modal.present();

    modal.onDidDismiss(parametros => {
      if(parametros){
        console.log(parametros);

      }else {
        console.log("Se cerro sin parametros");
        
      }
      
    })

  }

}
