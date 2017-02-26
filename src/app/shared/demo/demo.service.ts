import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Demo } from './demo.model';

@Injectable()
export class DemoService{

    constructor(public af: AngularFire){}
    
    initializeDemo(): Demo{
        return {id: UUID.UUID()};
    }

    // Firebase query
    getAllDemosFireBase(): FirebaseListObservable<Demo[]> {
         return this.af.database.list('/demos');   
    }
    addDemoFirebase(object: Demo): void {
        this.af.database.list('/demos').push(object);
    }
    updateDemoFirebase(object: Demo): void {
        let save = JSON.parse(JSON.stringify(object));
        delete save.$key;
        this.af.database.list('/demos').update(object.$key, save);
    }
    deleteDemoFirebase(object: Demo): void {
        this.af.database.list('/demos').remove(object.$key);
    }

}
