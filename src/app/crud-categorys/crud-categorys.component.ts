import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from '../services/services.service';
import { ToastAlertComponent } from '../shared/toast-alert/toast-alert.component';

@Component({
  selector: 'app-crud-categorys',
  templateUrl: './crud-categorys.component.html',
  styleUrls: ['./crud-categorys.component.scss']
})
export class CrudCategorysComponent implements OnInit {

  dataSource: any;
  primaryData: any;
  tableHeader = ['name','options'];

  constructor(
    public service: apiService,
    public router: Router,
    public alert: ToastAlertComponent
  ) { }

  ngOnInit(): void {
    this.getCategorys();
  }


  getCategorys() {
    this.service.getCategorys().subscribe(result => {
      this.dataSource = result;
    })
  }

  newCategorys() {
    this.router.navigate(['categorys/register']);
  }

  viewCategorys(id: string) {
    this.router.navigate([`categorys/view/${id}`]);
  }

  editCategorys(id: string) {
    this.router.navigate([`categorys/edit/${id}`]);
  }

  deleteCategorys(id: string) {
    this.service.deleteLaunche(id).subscribe(result => {
      this.openAlerts('Sua categoria foi deletada! 😊');
      this.getCategorys()
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
