import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { Router } from '@angular/router';
//import { AppdataService } from './appdata.service';
export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  getdata: any;
  

  
  constructor(public dataService: DataserviceService,
    private router: Router,
    public getdataservice : DataserviceService) {

      this.getdataservice.getProducts().subscribe((res:any)=>{
        this.getdata = res;
        

        console.log('data',this.getdata)
        
      })
    
   
  }
  ngOnInit(){
    
  }


  public menu: NavItem[] = [
    {
      displayName: 'Home',
      iconName: '',
      route: 'app/home',
    },
    {
      displayName: 'Users',
      iconName: '',
      route: 'app/users',
    },

    
  ];

 openUsersList(){
  this.router.navigate(['/users']);
 }
 openUsersDetails(){
  this.router.navigate(['/usersDetails']);
 }
 followerDetails(){
  this.router.navigate(['/follower']);
 }
 
  
  
  



  
}
