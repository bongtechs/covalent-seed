import { Component, Input } from '@angular/core';
import { DemoService } from '../../shared/demo/demo.service';
import { Demo } from '../../shared/demo/demo.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  constructor(private demoService: DemoService) { }

  @Input() selDemo: Demo;
  @Input() addOrUpdate: boolean;

  submit() {  
    if(this.addOrUpdate){
      this.demoService.addDemoFirebase(this.selDemo);
      this.selDemo = null;
    }
    else{
      this.demoService.updateDemoFirebase(this.selDemo);
      this.selDemo = null;
    }
  }
  
  delete(){
    this.demoService.deleteDemoFirebase(this.selDemo);
    this.selDemo = null;
  }

}
