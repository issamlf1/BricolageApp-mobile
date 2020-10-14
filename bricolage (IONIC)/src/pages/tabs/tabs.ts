import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
import { ProfilePage } from '../profile/profile';
import { MesannoncesPage } from '../mesannonces/mesannonces';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  
})
export class TabsPage {

   constructor(public navCtrl: NavController) {
   }
  profile = ProfilePage;
  annonce = AnnoncePage;
  mesannonces = MesannoncesPage;

  
 

}
