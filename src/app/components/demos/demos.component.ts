import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';
import { ITdDataTableSelectEvent } from '@covalent/core';
import { Observable } from 'rxjs/Observable';
import { Demo } from '../../shared/demo/demo.model';
import { DemoService } from '../../shared/demo/demo.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent implements OnInit {

  constructor(private demoService: DemoService) { }

  columns: ITdDataTableColumn[];
  data$: FirebaseListObservable<Demo[]>;;

  ngOnInit() {

    this.columns = [
      { name: 'name',  label: 'Name' },
    ];
    
    this.data$ = this.demoService.getAllDemosFireBase();
  }

  selectedDemo: Demo;
  add: boolean;

  selectEvent(event:ITdDataTableSelectEvent){
    if(event.selected){
      this.selectedDemo = event.row;
      this.add = false;
    }
    else{
      this.selectedDemo = null;
    } 
  }

  addNew(){
    this.add = true;
    this.selectedDemo = this.demoService.initializeDemo();
  }

}
