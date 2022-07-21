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
    this.router.navigate([`lauches/edit/${id}`]);
  }

  viewData(id: string) {
    this.router.navigate([`lauches/view/${id}`]);
  }

  deleteData(id: string) {
    this.service.deleteLaunche(id).subscribe(result => {
      this.openAlerts('Seu lançamento foi deletado! 😊');
      this.reloadTable.emit(true);
    })
  }

  openAlerts(message: string) {
    this.alert.open(
      message,
      'Fechar',
      {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1000 * 14
      });
  }

}
