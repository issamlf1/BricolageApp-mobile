import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnoncePostulerPage } from './annonce-postuler';

@NgModule({
  declarations: [
    AnnoncePostulerPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnoncePostulerPage),
  ],
})
export class AnnoncePostulerPageModule {}
