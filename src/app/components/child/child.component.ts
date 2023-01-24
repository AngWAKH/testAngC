import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
@Input () public nameFromParent;

@Output() public childEvent = new EventEmitter();

constructor() {
  }

  ngOnInit(): void {
  }

  public eventChild(){
  this.childEvent.emit("Message from child to parent");

  }

}
