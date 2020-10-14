import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the FormannocePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formannoce',
  templateUrl: 'formannoce.html',
})
export class FormannocePage implements OnInit {
  
  formulaireForm:FormGroup;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,public authProvider:AuthserviceProvider,private ctrlView:ViewController) {
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formulaireForm=this.formBuilder.group({
      titre:['', Validators.required],
      description:['',Validators.required],
      telephone: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('0+[5-7]+[0-9]+')])),
        prix:['',Validators.required],
        metie:['',Validators.required]
    });
  }
  send() {
    this.authProvider.setannonce(this.formulaireForm.value.titre,this.formulaireForm.value.description
      ,this.formulaireForm.value.telephone,this.formulaireForm.value.prix,this.formulaireForm.value.metie);
      this.ctrlView.dismiss();

  }
}
