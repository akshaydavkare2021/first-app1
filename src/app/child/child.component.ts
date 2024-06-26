import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [UsersDataService]
})
export class ChildComponent implements OnInit {
  @Input() childInput: any;
  @Output() updateDataEvent = new EventEmitter<string>();   
  constructor(public userService: UsersDataService) {}
  // studentData: any = {
  //   address: 'Asd 12 street',
  //   pin: '235412',
  // };
  user: any;
  ngOnInit(): void {
    console.log(this.childInput);
    this.userService.getUsers().subscribe((res: any)=>{
      console.log(res);
      this.user = res
    });
    console.log('user', this.user);
  }
//   sendData() {
//     this.updateDataEvent.emit(this.studentData);
//   }
}
