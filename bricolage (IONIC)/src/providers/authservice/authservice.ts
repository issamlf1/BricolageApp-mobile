import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TabsPage } from '../../pages/tabs/tabs';
import { AnnonceData } from '../../pages/lesannonce';
import { Observable } from 'rxjs/Observable';   
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthserviceProvider {
userName:String;
password:String;
user:String;
lesannonce:any;
annonceData:AnnonceData[];
metie:String;
url:String;
  constructor(private http:HttpClient , private alerte:AlertController) {
    console.log('Hello AuthserviceProvider Provider');
    this.url="http://192.168.43.113:8000";
  }



   setData(userName:String,password:String){
    const headers = new HttpHeaders({
      'Accept':'*',
      'X-Requested-With': 'XMLHttpRequest'
    });
   
    this.userName = userName;
    this.password=password;
    //console.log(this.userName);
    let data = {
      "username" : this.userName,
      "password" : this.password 
    }

    this.http.post(this.url+"/api/VerifierUser", data,{headers:headers}).subscribe((res)=>{
      
       
         this.user=res['exist'];
         console.log(this.user);

      
  });
setTimeout(() => {
    let addTodoAlert = this.alerte.create({
    title:"Erreur d'authentification",
    message:"cet utilisateur n'existe pas dans notre systeme",
    buttons:[
      {
        text:"Exite"

    }
 
  ]
  });
  if(this.user=='No')
  addTodoAlert.present();
}, 400);
  }


  getData():Observable<any>{
    const headers = new HttpHeaders({
      'Accept':'*',
      'X-Requested-With': 'XMLHttpRequest'
    });
    
    let data = {
      "username" : this.userName,
    }
    
   

     return this.http.post(this.url+"/api/GetAnonce",data, {headers:headers});
      
  
  }
  
  getInformation():Observable<any>{
    const headers = new HttpHeaders({
      'Accept':'*',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let data = {
            "username" : this.userName,
          }
   
    
   

     return this.http.post(this.url+"/api/GetUser",data, {headers:headers});
      
  
  }
  
setprofile(id:number,name:String,prenom:String,userName:String,email:String,password:String,address:String,typeUser:String,metie:String)
 {
    const headers = new HttpHeaders({
    'Accept':'*',
    'X-Requested-With': 'XMLHttpRequest'
  });

  if (metie==null || typeof metie=='undefined' || metie== '') {
    this.metie="null";
  }else{this.metie=metie;}

  let data = {
    "id" : id,
    "name" : name,
    "prenom" : prenom,
    "username" : userName,
    "email" : email,
    "password" : password ,
    "address" : address,
    "type_compte" : typeUser ,
    "tag" : this.metie
    
  }
  this.http.post(this.url+"/api/UpdateUser", data,{headers:headers}).subscribe();

}

 setannonce(titre:String,description:String,telephone:String,prix:number,metie:String){
  const headers = new HttpHeaders({
    'Accept':'*',
    'X-Requested-With': 'XMLHttpRequest'
  });

 let data = {

  "username" : this.userName,
  "titre_anonce" : titre,
  "tag" : metie,
  "tel" : telephone,
  "description" : description,
  "prix" : prix,
 }
 this.http.post(this.url+"/api/insererAnonce", data,{headers:headers}).subscribe();
    console.log(data);
 }
 setDatapostuler(client:String,titre:String,prix:number)
 {
  const headers = new HttpHeaders({
    'Accept':'*',
    'X-Requested-With': 'XMLHttpRequest'
  });
  let data = {
    "specialiste_username":this.userName,
    "titre_anonce":titre,
    "client_username":client,
    "prix_negociable":prix
  }
  this.http.post(this.url+"/api/insererAnonceDemander", data,{headers:headers}).subscribe();



 }
 getAnnonce():Observable<any>{
  const headers = new HttpHeaders({
    'Accept':'*',
    'X-Requested-With': 'XMLHttpRequest'
  });
 
  let data = {
    "username" : this.userName,
    
  }
 console.log(this.userName);

     return this.http.post(this.url+"/api/GetAnonceDemander",data, {headers:headers});     
   
   
};
accepter(id:number,user:String,anonce:String,etat:String){
  const headers = new HttpHeaders({
    'Accept':'*',
    'X-Requested-With': 'XMLHttpRequest'
  });
  let data = {
    "id" : id,
    "client_username" : user,
    "titre_anonce" : anonce,
    "etat" : etat,
    
  }
  this.http.post(this.url+"/api/AjouterEtatAnonce", data,{headers:headers}).subscribe((res)=>{
    
     
   
    
 
});

}

}
