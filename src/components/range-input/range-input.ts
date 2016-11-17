import {
  Component, Input, OnInit, Output, EventEmitter
} from '@angular/core';

let uniqueID: number = 0;

export interface Item {
  id: string;
  value: any;
}

@Component({
  selector: 'range-input',
  templateUrl: 'range-input.html'
})
export class RangeInputComponent implements OnInit {

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() min: number = 2;
  @Input() max: number = 8;

  value: number = null;
  uniqueID: number = uniqueID++;
  name: string = `range-input-${this.uniqueID}`;
  items: Item[] = Array();

  ngOnInit() {
    for (let i=this.min, ii=this.max; i <= ii; i++) {
      this.items.push({
        id: `range-${this.uniqueID}-${i}`,
        value: i
      });
    }
  }

  onInputChange(event) {
    this.valueChange.emit(+event.target.value);
  }
}