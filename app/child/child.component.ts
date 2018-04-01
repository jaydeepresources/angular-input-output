import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  no: number;

  @Output()
  newNo: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }

  increase() {
    this.no++;
    this.newNo.emit(this.no);
  }

  ngOnInit() {
  }

}
