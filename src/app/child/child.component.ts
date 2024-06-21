import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements  OnInit{

  constructor(){}
  ngOnInit(): void {
    
  }
  @Input() item2:any;
  @Output() updateDataEvent= new EventEmitter<string>();
  sendData() {
    this.updateDataEvent.emit('Data from child');
}
}