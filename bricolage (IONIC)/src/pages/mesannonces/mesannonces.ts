import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MesannoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mesannonces',
  templateUrl: 'mesannonces.html',
})
export class MesannoncesPage {
  latable:Observable<any>;
  result:any=[];
  user:String;

  constructor(public navCtrl: NavController, public navParams: NavParams,private authservice:AuthserviceProvider) {
  }

  ionViewWillEnter() {
    this.result=[];
    this.latable=this.authservice.getAnnonce();
    this.latable.subscribe((data) =>{
      this.result=data;
      console.log(this.result);
    });
    this.user=this.authservice.userName;
    
    
  }
  onRefuser(id:number,client_username:String,titre_anonce:String,etat_demande:String){
    console.log(id,client_username,titre_anonce,etat_demande);
    this.authservice.accepter(id,client_username,titre_anonce,etat_demande);
    this.ionViewWillEnter();
  }
onAccepter(id:number,client_username:String,titre_anonce:String,etat_demande:String){
  console.log(id,client_username,titre_anonce,etat_demande);
  this.authservice.accepter(id,client_username,titre_anonce,etat_demande);
  this.ionViewWillEnter();
}
}
