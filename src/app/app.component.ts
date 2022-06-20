import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment4_Medium1';
  userInput: number = 0;
  toggle = false;
  Primelist: Array<any> = [];
  Primenum() {
    this.toggle = !this.toggle;
    for (var i = 0; i <= this.userInput; i++) {
      var flag = 0;
      for (var j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 1;
          break;
        }
      }
      if (i > 1 && flag == 0) {
        console.log(i);
        this.Primelist.push(i);
      }
    }
    
  }
}
