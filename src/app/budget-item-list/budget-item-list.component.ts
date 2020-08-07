import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from './../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() deleteItem: EventEmitter<BudgetItem> = new EventEmitter<
    BudgetItem
  >();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  delete(item: BudgetItem): void {
    this.deleteItem.emit(item);
  }

  onCardClicked(item: BudgetItem): void {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '500px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.update.emit({
          old: item,
          new: result,
        });
      }
    });
  }
}
