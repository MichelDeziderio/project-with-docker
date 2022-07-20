import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { apiService } from 'src/app/services/services.service';
import { MergeForCategory } from 'src/app/shared/utils/merge-lauche-and-category';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


@Component({
  selector: 'app-crud-edit-view',
  templateUrl: './crud-edit-view.component.html',
  styleUrls: ['./crud-edit-view.component.scss']
})
export class CrudEditViewComponent implements OnInit {

  dataSource: any;
  getLauche: any;
  formEdit: FormGroup;
  dateValue: any;
  listCategorys: any;
  disabledForm: boolean = false;
  title: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public service: apiService,
    public formBuilder: FormBuilder,
    public router: Router,
    private dateAdapter: DateAdapter<any>
  ) {
    this.formEdit = formBuilder.group({
      description: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
      value: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.dateAdapter.setLocale('br');
    this.editLauche()
    this.getCategorys();
  }

  editLauche() {

    if (this.activatedRoute.snapshot.url[0].path === 'view') {
      this.disabledForm = true;
      this.title = 'Visualizar lançamento';
    } else {
      this.title = 'Editar lançamento';
    }

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {

      const getId = params.get('id');

      this.service.getLauncheById(getId).subscribe(result => {

        this.getLauche = [result];

      })

    })
  }

  getCategorys() {
    this.service.getCategorys().subscribe(result => {

      this.listCategorys = result;

      const mergeData = MergeForCategory(this.getLauche, result)[0];

      this.dateValue = new FormControl(this.convertDate(mergeData.date));


      this.formEdit = this.formBuilder.group({
        description: [{ value: mergeData.description, disabled: this.disabledForm }, Validators.required],
        date: [{ value: this.dateValue.value, disabled: true }],
        category: [{ value: mergeData.name, disabled: this.disabledForm }, Validators.required],
        value: [{ value: mergeData.value, disabled: true }, Validators.required]
      })

      this.dataSource = mergeData;
    })
  }

  backPage() {
    this.router.navigate(['lauches']);
  }

  convertDate(date: string) {
    let newDate: any = date.split('/');
    return newDate = new Date(`${newDate[2]}-${newDate[1]}-${newDate[0]}`)
  }

}
