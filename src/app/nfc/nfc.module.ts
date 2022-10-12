import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NfcPageRoutingModule } from './nfc-routing.module';

import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';

import { NfcPage } from './nfc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NfcPageRoutingModule,
  ],
  declarations: [NfcPage],
  providers: [NFC, Ndef]
})
export class NfcPageModule {}
