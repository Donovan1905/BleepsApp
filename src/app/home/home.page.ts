import { Component } from '@angular/core';
import { ApiSvcService } from '../services/api-svc.service';

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

  bdd: any = {
    isHandled: false,
    client: {
      name: "Donovan",
      braceletId: 1,
      isOwner: false,
    }
  };



  constructor(private apiSvc: ApiSvcService) {}

  public hideOverlay() {
    this.overlayHidden = true;
  }

  ngOnInit() {
    setInterval(() => {
      this.apiSvc.getStatus().subscribe((response) => {
        this.fall = response['fall'];
        this.idle = response['idle'];
        this.handling = response['handling'];
        console.log("fall " + this.fall);
        console.log("idle " + this.idle);
        console.log("handling " + this.handling);
      })
    }, 2000)
  }
  
  handleEmergency() {
    this.apiSvc.sendHandling().subscribe((response) => {
      console.log(response);
    })
  }

}
