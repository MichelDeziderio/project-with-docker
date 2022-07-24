import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { apiService } from 'src/app/services/services.service';
import { ToastAlertComponent } from 'src/app/shared/toast-alert/toast-alert.component';

@Component({
  selector: 'app-curd-edit-view-category',
  templateUrl: './curd-edit-view-category.component.html',
  styleUrls: ['./curd-edit-view-category.component.scss']
})
export class CurdEditViewCategoryComponent implements OnInit {

  formEdit: FormGroup;
  listCategorys: any;
  disabledForm: boolean = false;
  title: any;
  dataSource: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public service: apiService,
    public formBuilder: FormBuilder,
    public router: Router,
    public alert: ToastAlertComponent
  ) {
    this.formEdit = formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getCategorys();
  }

  getCategorys() {

    if (this.activatedRoute.snapshot.url[1].path === 'view') {
      this.disabledForm = true;
      this.title = 'Visualizar categoria';
    } else {
      this.title = 'Editar categoria';
    }

    const getId = this.activatedRoute.snapshot.url[2].path;

    this.service.getCategoryById(getId).subscribe(result => {
      this.dataSource = result;
      this.formEdit = this.formBuilder.group({
        name: [{ value: result.name, disabled: this.disabledForm }, Validators.required]
      })

    })

  }

  backPage() {
    this.router.navigate(['categorys']);
  }

  save() { }

}
