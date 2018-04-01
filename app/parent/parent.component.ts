import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  no: number;

  constructor() {
    this.no = 10;
  }

  increase(){
    this.no++;
  }

  noChange(event) {
    this.no = event;
  }

  ngOnInit() {
  }

}
