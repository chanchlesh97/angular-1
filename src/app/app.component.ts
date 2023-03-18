import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAzureDemo';
  testLabel = "Started";
  constructor(updates: SwUpdate){
      setInterval(()=>{
        if(updates.isEnabled){
          this.testLabel = "Service Worker Available!!"
        }else{
          this.testLabel = "No Service Worker!!"

        }
      }, 2000);
  }
  changeStatus(){
    this.testLabel = "Resetting"
    console.log("change");
  }
}
