import { Component, AfterViewInit, ViewChild, ElementRef,OnInit } from '@angular/core';
import { Chart, ChartData } from 'chart.js'


@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent {
  type = 'bar';
  
}
