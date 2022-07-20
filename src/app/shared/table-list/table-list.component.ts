import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})

export class TableListComponent implements OnInit {

  @Input() dataSource: any;

  displayedColumns: string[] = [];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['description', 'category', 'date', 'value', 'options'];
  }


  editData(id: string) {
    this.router.navigate([`edit/${id}`]);
  }

}
