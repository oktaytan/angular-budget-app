import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item: BudgetItem;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDeleteEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.onDeleteEvent.emit();
  }
}
