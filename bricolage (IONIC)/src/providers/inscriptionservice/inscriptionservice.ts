import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InscriptionserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InscriptionserviceProvider {
  name:String;
  prenom:String;
  userName:String;
  password:String;
  address:String;
  typeUser:String;
  metie:String;
  email:String;
  
  constructor(public http: HttpClient) {
    console.log('Hello InscriptionserviceProvider Provider');
  }

  setinscription(name:String,prenom:String,userName:String,password:String,address:String,typeUser:String,metie:String,email:String)
  {
    
    
      const headers = new HttpHeaders({
        'Accept':'*',
        'X-Requested-With': 'XMLHttpRequest',
        
      });
     
      this.name = name;
      this.prenom=prenom;
      this.userName = userName;
      this.password=password;
      this.address = address;
      this.typeUser=typeUser;
      this.email=email;
      if (metie==null || typeof metie=='undefined' || metie== '') {
        this.metie="null";
      }else{this.metie=metie;}
      
      
      let data = {

        "name" : this.name,
        "prenom" : this.prenom,
        "username" : this.userName,
        "email" : this.email,
        "password" : this.password ,
        "address" : this.address,
        "type_compte" : this.typeUser ,
        "tag" : this.metie,
        
        
      }
  
      this.http.post("http://192.168.43.113:8000/api/insererUser", data,{headers:headers}).subscribe(
        (res)=>{
       console.log(res);
    }
    );
    
    
  }

}
