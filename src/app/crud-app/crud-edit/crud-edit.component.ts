import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { apiService } from 'src/app/services/services.service';
import { MergeForCategory } from 'src/app/shared/utils/merge-lauche-and-category';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.scss']
})
export class CrudEditComponent implements OnInit {

  dataSource: any;
  getLauche: any;
  formEdit: FormGroup;
  dateValue: any;
  listCategorys: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public service: apiService,
    public formBuilder: FormBuilder
  ) {
    this.formEdit = formBuilder.group({
      description: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
      value: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.editLauche()
    this.getCategorys();
  }

  editLauche() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {

      const getId = params.get('id');

      this.service.getLauncheById(getId).subscribe(result => {

        this.dateValue = result.date;
        this.getLauche = [result];

      })

    })
  }

  getCategorys() {
    this.service.getCategorys().subscribe(result => {

      this.listCategorys = result;

      const mergeData = MergeForCategory(this.getLauche, result)[0];

      this.formEdit = this.formBuilder.group({
        description: [mergeData.description, Validators.required],
        date: new FormControl(mergeData.date),
        category: [mergeData.name, Validators.required],
        value: [mergeData.value, Validators.required]
      })

      this.dataSource = mergeData;

    })
  }

}
