import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { InscriptionPage } from '../inscription/inscription';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage implements OnInit{
  authForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,private authservice:AuthserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.authForm = this.formBuilder.group({
      user_name: ['', Validators.required],
      Password: ['', Validators.required]

    });
  }
  authentifier() {
    this.authservice.setData(this.authForm.value.user_name,this.authForm.value.Password);
    setTimeout(() => {
      if (this.authservice.user==this.authForm.value.user_name) {
        this.navCtrl.push(TabsPage);
       
      }
    }, 800);
   

  }
  inscrit(){
  this.navCtrl.push(InscriptionPage);
  }

}
