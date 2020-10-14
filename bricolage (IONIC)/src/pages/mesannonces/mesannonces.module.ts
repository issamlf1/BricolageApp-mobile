import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesannoncesPage } from './mesannonces';

@NgModule({
  declarations: [
    MesannoncesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesannoncesPage),
  ],
})
export class MesannoncesPageModule {}
