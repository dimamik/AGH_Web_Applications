import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  clickNumber = 0;
  canClick = true;

  addCounts() {
    this.clickNumber += 1;
    if (this.clickNumber >= 10) {
      this.canClick = false;
    }
  }

  resetCounts() {
    this.clickNumber = 0;
    this.canClick = true;
  }

  ngOnInit(): void {
  }
}
