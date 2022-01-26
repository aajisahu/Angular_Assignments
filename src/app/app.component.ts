import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  
  imgUrl="../assets/Bridgelabzz.jpg";

  ngOnInit():void{

    this.title="Hello form Bridgelabz";

  }


}
