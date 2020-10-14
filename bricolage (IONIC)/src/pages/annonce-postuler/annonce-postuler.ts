import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { AnnoncePage } from '../annonce/annonce';
import { TabsPage } from '../tabs/tabs';
import { InscriptionPage } from '../inscription/inscription';

/**
 * Generated class for the AnnoncePostulerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonce-postuler',
  templateUrl: 'annonce-postuler.html',
})
export class AnnoncePostulerPage {
  titre:String=this.navParams.get('titre');
  demandeur:String=this.navParams.get('username');
  description:String=this.navParams.get('description');
  prix:number=this.navParams.get('prix');
  prixNego:number;
  back=false;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
    public authService:AuthserviceProvider,private ctrlView:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoncePostulerPage');
  }
  envoyer()
  {
    
    console.log(this.prixNego);
    this.authService.setDatapostuler(this.navParams.get('username'),this.navParams.get('titre'),this.prixNego);
    this.back=true;
    
    this.ctrlView.dismiss();
  }

}
