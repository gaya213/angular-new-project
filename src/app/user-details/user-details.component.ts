import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../../models/users';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  getdata: any;
  username :any;
  id: any;
  getdata1: any;
  getusers :any;
  name: any;
  constructor(public dataService: DataserviceService,
    private router: Router,
    public getdataservice : DataserviceService) {}
    ngOnInit(){
    this.getuser();
    }
    getuser(){
      // debugger;
      this.getdataservice.getUsers
      ().subscribe((response:any)=>{
        this.getusers = response;
        
  
        console.log('dataaaaaa',this.getusers)
        
      })
    }
    displayedColumns: string[] = [
      'Id',
      'Name',
      'Company',
      'Location',
    ];
    
  
    dataSource = new MatTableDataSource(this.displayedColumns);
  
    
  
  
    ngAfterViewInit() {}
  
}
