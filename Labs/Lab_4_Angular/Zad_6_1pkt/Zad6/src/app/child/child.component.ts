import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  @Output() clicked = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() isFull: boolean;

  increase() {
    this.clicked.emit();
  }

  resetButton() {
    this.reset.emit();
  }
}
