import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from '../services/services.service';
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
    public router: Router
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

  reloadeTablelist(reload: boolean) {

    if (reload) { this.getLauches(); console.log('reload') }

  }

  newLauche() {
    this.router.navigate(['lauches/register']);
  }

}
