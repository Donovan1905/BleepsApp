import { Component, OnInit } from '@angular/core';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.page.html',
  styleUrls: ['./nfc.page.scss'],
})
export class NfcPage implements OnInit {

  readerMode$: any;

  constructor(private nfc: NFC, private ndef: Ndef) { }

 
  ngOnInit(){
    
  }
    readNFC(){
      let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
      this.readerMode$ = this.nfc.readerMode(flags).subscribe(
          tag => console.log(JSON.stringify(tag)),
          err => console.log('Error reading tag', err)
      );
    }


    // Read NFC Tag - Android
    // Once the reader mode is enabled, any tags that are scanned are sent to the subscriber


    
  

  

}
