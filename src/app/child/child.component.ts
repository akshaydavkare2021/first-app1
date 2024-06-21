import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
  @Input() childInput: any;
  @Output() updateDataEvent = new EventEmitter<string>();
  constructor() {}
  studentData: any = {
    address: 'Asd 12 street',
    pin: '235412',
  };
  ngOnInit(): void {
    console.log(this.childInput);
  }
  sendData() {
    this.updateDataEvent.emit(this.studentData);
  }
}
