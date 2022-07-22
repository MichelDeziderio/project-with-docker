import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from 'src/app/services/services.service';
import { ToastAlertComponent } from '../toast-alert/toast-alert.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})

export class TableListComponent implements OnInit {

  @Input() dataSource: any;
  @Input() tableHeader: any;
  @Output() reloadTable = new EventEmitter();
  @Output() view = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  displayedColumns: string[] = [];

  constructor(
    public router: Router,
    public service: apiService,
    public alert: ToastAlertComponent
  ) { }

  ngOnInit(): void {
    this.displayedColumns = this.tableHeader;
  }

  editData(id: string) {
    this.edit.emit(id);
  }

  viewData(id: string) {
    this.view.emit(id);
  }

  deleteData(id: string) {
    this.delete.emit(id);
  }

}
