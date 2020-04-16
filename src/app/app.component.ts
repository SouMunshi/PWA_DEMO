import { Component } from '@angular/core';
import { SwUpdate} from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jokes';
  jokes: any;
  Users: any;
  update: boolean =false;
  constructor(updates: SwUpdate, private data:DataService){
    updates.available.subscribe(event => {
      this.update=true;
      updates.activateUpdate().then(()=>document.location.reload());
    })
  }

  ngOnInit(){
    this.data.givemeJokes().subscribe(res=>{

      this.jokes=res;
    });
    this.data.givemeUsers().subscribe(rest=>{

      this.Users=rest;
    });
  }
}
