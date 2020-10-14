import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Refresher } from 'ionic-angular';
import { FormannocePage } from '../formannoce/formannoce';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { AnnonceData } from '../lesannonce';
import { Observable } from 'rxjs/Observable';
import { AnnoncePostulerPage } from '../annonce-postuler/annonce-postuler';

/**
 * Generated class for the AnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonce',
  templateUrl: 'annonce.html',
})
export class AnnoncePage{
  latable:Observable<any>;
  result:any=[];
  meme:any=[];
  different:any=[];
  useraut:String;
  i:number=0;
  j:number=0;
  k:number=0;
  visible:boolean=false;

  // onViewLoad(){
    
  // }
  ionViewWillEnter() {
    this.useraut=this.authservice.userName;

    this.result=[];
    this.meme=[];
    this.different=[];
    this.i=0;
    this.j=0;
    this.k=0;

    this.latable=this.authservice.getData();
    this.latable.subscribe((data) =>{
      this.result=data;
      for(this.i=0;this.i<this.result.length;this.i++){
        if(this.result[this.i].username==this.authservice.userName)
        {
          this.meme[this.j]=this.result[this.i];
          this.j++;
        }else{
          this.visible=true;
          this.different[this.k]=this.result[this.i];
          this.k++;
        }
       }
      
      console.log(this.meme);
    });
  } 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authservice:AuthserviceProvider) {
  }

  nouveauAnnonce(){
    this.navCtrl.push(FormannocePage);
  }
send(titre:String,tag:String,description:String,prix:number,username:String)
  {
    if(this.authservice.userName!=username)
    this.navCtrl.push(AnnoncePostulerPage,{titre:titre,
      tag:tag,
      description:description,
      prix:prix,
      username:username
    });
  }

}
