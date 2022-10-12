import { Component } from '@angular/core';
import { ApiSvcService } from '../services/api-svc.service';
import { LocalNService } from '../services/local-n.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  status: any;
  fall: boolean;
  idle: boolean;
  handling: boolean;
  overlayHidden: boolean = true;
  id: number = 0;
  hasNotified: boolean = false;

  bdd: any = {
    isHandled: false,
    client: {
      name: "Donovan",
      braceletId: 1,
      isOwner: false,
    }
  };



  constructor(private apiSvc: ApiSvcService, private localNS: LocalNService) {}

  public hideOverlay() {
    this.overlayHidden = true;
  }

  ngOnInit() {
    setInterval(() => {
      this.apiSvc.getStatus().subscribe((response) => {
        this.fall = response['status']['fall'];
        this.idle = response['status']['idle'];
        this.handling = response['status']['handling'];
        console.log("fall " + this.fall);
        console.log("idle " + this.idle);
        console.log("handling " + this.handling);
      })
      
      if (this.fall && !this.handling && !this.hasNotified) {
        this.id++;
        this.localNS.showLocalNotification(this.id, "Boudette est tombée", String(this.fall));
        this.hasNotified = true;
      }
    }, 2000)
  }
  
  handleEmergency() {
    this.apiSvc.sendHandling().subscribe((response) => {
      console.log(response);
    })
    this.hasNotified = false;
  }

  declineErmergency() {
    this.apiSvc.sendDecline().subscribe((response) => {
      console.log(response);
    })
  }

}
