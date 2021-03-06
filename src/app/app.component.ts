import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';

  imgUrl = "../assets/Bridgelabzz.jpg";

  url = "https://www.bridgelabz.com/";

  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {

    this.title = "Hello form Bridgelabz";

  }


  onClick($event: any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event:any){
    console.log("Change event occured !", $event.data);
    const nameRegex= RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is incorrect!"
  }

}
