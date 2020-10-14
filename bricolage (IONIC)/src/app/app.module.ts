import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { AuthserviceProvider } from '../providers/authservice/authservice';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionPage } from '../pages/inscription/inscription';
import { InscriptionserviceProvider } from '../providers/inscriptionservice/inscriptionservice';
import { AnnoncePage } from '../pages/annonce/annonce';
import { TabsPage } from '../pages/tabs/tabs';
import { FormannocePage } from '../pages/formannoce/formannoce';
import { ProfilePage } from '../pages/profile/profile';
import { MesannoncesPage } from '../pages/mesannonces/mesannonces';
import { AnnoceserviceProvider } from '../providers/annoceservice/annoceservice';
import { ProfileserviceProvider } from '../providers/profileservice/profileservice';
import { AnnonceData } from '../pages/lesannonce';
import { AnnoncePostulerPage } from '../pages/annonce-postuler/annonce-postuler';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthPage,
    InscriptionPage,
    AnnoncePage,
    TabsPage,
    FormannocePage,
    ProfilePage,
    MesannoncesPage,
    AnnoncePostulerPage
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage,
    InscriptionPage,
    AnnoncePage,
    TabsPage,
    FormannocePage,
    ProfilePage,
    MesannoncesPage,
    AnnoncePostulerPage
    
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthserviceProvider,
    InscriptionserviceProvider,
    InscriptionserviceProvider,
    AnnoceserviceProvider,
    ProfileserviceProvider,
    
    
    
    
  ]
})
export class AppModule {}
