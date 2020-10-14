import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { InscriptionserviceProvider } from '../../providers/inscriptionservice/inscriptionservice';

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage implements OnInit {

  
  formulaireForm: FormGroup;
  visibilite = false;
  t:boolean;
  k:boolean;
  tag: string = '';
  //appareilsList: FormulaireClass;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    private inscService: InscriptionserviceProvider,private ctrlView:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptionPage');
  }
  ngOnInit(): void {
    this.initForm();
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
      typeUser: ['', Validators.required],
      metie:['',Validators],
      

    });
  }
  changer() {
    this.visibilite = true;
    console.log(this.visibilite);
  }
  changerUn(){
    this.visibilite = false;
    this.formulaireForm.value.metie="";
    console.log(this.visibilite);
  }

send(){

  
        
        
        
        this.inscService.setinscription(
          this.formulaireForm.value.name,
          this.formulaireForm.value.prenom,
          this.formulaireForm.value.user_name,
          this.formulaireForm.value.password,
          this.formulaireForm.value.address,
          this.formulaireForm.value.typeUser,
          this.formulaireForm.value.metie,
          this.formulaireForm.value.email,
          )
      
          this.ctrlView.dismiss();
          

}

}
