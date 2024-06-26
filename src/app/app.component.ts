import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ChildComponent, HttpClientModule],
  

})
export class AppComponent {
  title = 'first-app';
  data = 10;
  childData = {
    name: 'Alex',
    lastName: 'Parker',
  };
  updateChild() {
    this.data = Math.random() * 10;
  }
  updateData(event: any) {
    console.log('Data received from parrent');
    console.log(event);
  }
}
