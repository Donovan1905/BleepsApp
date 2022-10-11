import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class LocalNService {

  constructor() { }
  async showLocalNotification(id : number, title : string, text : string){

    LocalNotifications.schedule({
    notifications:[
    {
        title : title,
        body : text,
        id : id,
        sound: 'doorbell.wav'
    }
    ]
    });
  }
}
