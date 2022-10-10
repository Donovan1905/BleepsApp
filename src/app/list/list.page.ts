import { Component, OnInit } from '@angular/core';
import { ApiSvcService } from '../services/api-svc.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  status: any;

  constructor(
    private apiSvc: ApiSvcService
  ) { }

  ngOnInit() {
    // setInterval(() => {
    //   this.apiSvc.getStatus().subscribe((response) => {
    //     this.status = response.status;
    //     console.log(this.status);
    //   })
    // }, 2000)
  }



}
