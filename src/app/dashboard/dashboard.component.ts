import { Component, AfterViewInit } from '@angular/core';
import { TdLoadingService } from '@covalent/core';

@Component({
  selector: 'covalent-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  viewProviders: [ ],
})
export class DashboardComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    
  }
  
}
