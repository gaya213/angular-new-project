import { Component, ViewChild } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  displayedColumns = ['Id', 'Name'];
  getdata: any;
  constructor(public dataService: DataserviceService,
    private router: Router,
    public getdataservice : DataserviceService) {

      this.getdataservice.getProducts().subscribe((res:any)=>{
        this.getdata = res;
        

        console.log('data',this.getdata)
        
      })
    
   
  }
  

}

