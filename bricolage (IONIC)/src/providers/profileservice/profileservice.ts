import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProfileserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileserviceProvider {
//username:String;
  constructor(public http: HttpClient) {
  
  }
  // setUserName(user:String){
  //   this.username=user;
  // }


}
