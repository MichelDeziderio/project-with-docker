import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from '../services/services.service';
import { ToastAlertComponent } from '../shared/toast-alert/toast-alert.component';
import { MergeForCategory } from '../shared/utils/merge-lauche-and-category';

@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.scss']
})
export class CrudAppComponent implements OnInit {

  dataSource: any;
  primaryData: any;
  tableHeader = ['description', 'category', 'date', 'value', 'options'];

  constructor(
    public service: apiService,
    public router: Router,
    public alert: ToastAlertComponent
  ) { }

  ngOnInit(): void {
    this.getLauches();
  }

  getLauches() {
    this.service.getLaunches().subscribe(result => {
      this.primaryData = result;
      this.getCategorys();
    })
  }

  getCategorys() {
    this.service.getCategorys().subscribe(result => {
      this.dataSource = MergeForCategory(this.primaryData, result);
    })
  }

  newLauche() {
    this.router.navigate(['lauches/register']);
  }

  viewLauches(id: string) {
    this.router.navigate([`lauches/view/${id}`]);
  }

  editLauches(id: string) {
    this.router.navigate([`lauches/edit/${id}`]);
  }

  deleteLauches(id: string) {
    this.service.deleteLaunche(id).subscribe(result => {
      this.openAlerts('Seu lançamento foi deletado! 😊');
      this.getLauches()
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
