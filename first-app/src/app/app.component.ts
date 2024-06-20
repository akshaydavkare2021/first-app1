import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ChildComponent]
})
export class AppComponent {
  title = 'first-app';
  data=10;
  updateChild()
  {
    this.data= (Math.random()*10)
  }
  updateData(item1:string){
  console.warn(item1)
  }
}
