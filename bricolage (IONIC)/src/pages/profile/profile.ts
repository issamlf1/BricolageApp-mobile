import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {
  id:number;
  nom:String;
  prenom:String;
  username:String;
  email:String;
  password:String;
  adresse:String;
  client:Boolean=false;//
  specialiste:Boolean=false; //
  metier:String;
  latable:Observable<any>;
  result:any=[];
  typecompte:String;
  specialite:String;
  condition:boolean=false;

  
  formulaireForm: FormGroup;
  visibilite = this.specialiste;
  t:boolean;
  k:boolean;
  tag: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,private authservice:AuthserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.latable=this.authservice.getInformation();
    this.latable.subscribe((data) =>{
      this.result=data;
      console.log(this.result);
    this.id=this.result[0];
     this.nom=this.result[1];
     this.prenom=this.result[2];
     this.username=this.result[3];
     this.email=this.result[4];
     this.password=this.result[5];
     this.adresse=this.result[6];
     this.typecompte=this.result[7];
     this.specialite=this.result[8];
     if(this.typecompte=='specialiste'){
      this.condition=true;
     }
    //  if(this.result[7]=='specialiste')
    //     {this.specialiste=true;
    //     this.client=false;
    //     this.visibilite = this.specialiste;
    //     this.metier=this.result[8];
    //   }
    //  else
    //    { this.client=true;
    //       this.specialiste=false;
    //       this.visibilite = this.specialiste;
    //   }
    
    });
  }
  ngOnInit(): void {
    this.initForm();
   // this.nom='teest';
    
  }

  initForm() {
    this.formulaireForm = this.formBuilder.group({
      name: ['', Validators.required],
      prenom:['',Validators.required],
      user_name: ['', Validators.required],
     // email: ['', Validators.pattern(".+\@.+\..+")],
      password: ['', Validators.required],
      address: ['', Validators.required],
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    
     typecompte:['', Validators],
     specialite:['',Validators],

    });
  }
  // changer() {
  //   this.visibilite = true;
  //   console.log(this.visibilite);
  // }
  // changerUn(){
  //   this.visibilite = false;
  //   this.formulaireForm.value.metie=""
  //   console.log(this.visibilite);
  // }

send(){





  this.authservice.setprofile(this.id,
    this.formulaireForm.value.name,
    this.formulaireForm.value.prenom,
    this.formulaireForm.value.user_name,
    this.formulaireForm.value.email,
    this.formulaireForm.value.password,
    this.formulaireForm.value.address,
    this.formulaireForm.value.typecompte,
    this.formulaireForm.value.specialite);

    console.log(this.formulaireForm.value.prenom);
  
}

Deconnexion()
{
  window.location.reload();
}



}
