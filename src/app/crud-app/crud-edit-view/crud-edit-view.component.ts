import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { apiService } from 'src/app/services/services.service';
import { ToastAlertComponent } from 'src/app/shared/toast-alert/toast-alert.component';
import { MergeForCategory } from 'src/app/shared/utils/merge-lauche-and-category';


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
  getId: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public service: apiService,
    public formBuilder: FormBuilder,
    public router: Router,
    private dateAdapter: DateAdapter<any>,
    public alert: ToastAlertComponent
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
    if (this.activatedRoute.snapshot.url[1].path === 'view') {
      this.disabledForm = true;
      this.title = 'Visualizar lançamento';
    } else {
      this.title = 'Editar lançamento';
    }

    this.getId = this.activatedRoute.snapshot.url[2].path;

    this.service.getLauncheById(this.getId).subscribe(result => {

      this.getLauche = [result];

    })

  }

  getCategorys() {
    this.service.getCategorys().subscribe(result => {

      this.listCategorys = result;

      const mergeData = MergeForCategory(this.getLauche, result)[0];

      this.formEdit = this.formBuilder.group({
        description: [{ value: mergeData.description, disabled: this.disabledForm }, Validators.required],
        date: [{ value: this.convertDate(mergeData.date), disabled: true }],
        category: [{ value: mergeData.id, disabled: this.disabledForm }, Validators.required],
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

    newDate[0] = Number(newDate[0]) + 1;
    newDate[0] = newDate[0].toString();

    return newDate = new Date(`${newDate[2]}-${newDate[1]}-${newDate[0]}`)
  }

  save() {

    const description = this.formEdit.get('description');
    const date = this.formEdit.get('date');
    const value = this.formEdit.get('value');

    const send = {
      description: description?.value,
      date: new Date(date?.value).toLocaleDateString(),
      idCategoria: this.dataSource.idCategoria,
      value: value?.value
    }

    this.service.putLaunches(this.getId, send).subscribe(result => {
      this.openAlerts('Seu lançamento foi atualizado! 😊');
      this.backPage();
    }, erro => {
      this.openAlerts('Erro ao atualizado!');
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
