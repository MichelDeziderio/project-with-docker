import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Category } from '../models/category';
import { Lauches } from '../models/lauches';
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

  constructor(
    public service: apiService
  ) { }

  ngOnInit(): void {
    this.getLauches();
    this.getCategorys();
  }

  getLauches() {
    this.service.getLaunches().subscribe(result => {
      this.primaryData = result;
    })
  }

  getCategorys() {
    this.service.getCategorys().subscribe(result => {
      this.dataSource = MergeForCategory(this.primaryData, result);
    })
  }


}
