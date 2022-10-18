import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { apiService } from 'src/app/services/services.service';
import { ToastAlertComponent } from 'src/app/shared/toast-alert/toast-alert.component';

@Component({
  selector: 'app-crud-edit-view-category',
  templateUrl: './crud-edit-view-category.component.html',
  styleUrls: ['./crud-edit-view-category.component.scss']
})
export class CrudEditViewCategoryComponent implements OnInit {

  formEdit: FormGroup;
  listCategorys: any;
  disabledForm: boolean = false;
  title: any;
  dataSource: any;
  getId: any;

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

    this.getId = this.activatedRoute.snapshot.url[2].path;

    this.service.getCategoryById(this.getId).subscribe(result => {
      this.dataSource = result;
      this.formEdit = this.formBuilder.group({
        name: [{ value: result.name, disabled: this.disabledForm }, Validators.required]
      })

    })

  }

  backPage() {
    this.router.navigate(['categorys']);
  }

  save() {
    const name = this.formEdit.get('name');

    const send = {
      name: name?.value
    }

    this.service.putCategorys(this.getId, send).subscribe(result => {
      this.openAlerts('Sua categoria foi editada! 😊');
      this.backPage();
    }, erro => {
      this.openAlerts('Erro ao Editar!');
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
