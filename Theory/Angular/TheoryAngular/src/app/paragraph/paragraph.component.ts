import { Component, OnInit } from '@angular/core';
import { ListGetterService } from '../list-getter.service';
import { range } from 'rxjs';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  info;
  constructor(service: ListGetterService) {
    this.info = service.getInfo();
  }

  ngOnInit(): void {
  }
  /* Types of binding */

  /* Event binding */
  name = 'Peter';
  updateName() {
    this.name = 'John';
  }
  /* Two way binding! -> Need FormsModule to be imported in ap.module */
  val: string = '';

  /* Property binding */
  buttonDisabled = true;
  animal = {
    name: 'Lion',
    image: 'https://images.morele.net/d/146165853491801d5288013d4f3a21b4771779b95d531064e634f.gif'
  }
  nameDetails = 'The name is Bond <b>James Bond<b/>';
  color = 'indianred';
  fontSize = '15px';
  opacity = 0.7;

  styles = {
    color: 'indianred',
    fontSize: '15px',
    opacity: 0.7,
  }
}
