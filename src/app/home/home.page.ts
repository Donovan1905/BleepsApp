import { Component } from '@angular/core';
import { ApiSvcService } from '../services/api-svc.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  status: any;

  constructor(private apiSvc: ApiSvcService) {}

  ngOnInit() {
    setInterval(() => {
      console.log('test')
      this.apiSvc.getStatus().subscribe((response) => {
        this.status = response.status;
        console.log(this.status);
      })
    }, 2000)
  }

}
